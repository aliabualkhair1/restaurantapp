import { Component } from '@angular/core';
import { Tablesservices } from '../../../../Services/tablesservices';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationPipe } from "../../../../TranslationPipe/translation-pipe";

@Component({
  selector: 'app-updatetable',
  standalone:true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslationPipe],
  templateUrl: './updatetable.html',
  styleUrl: './updatetable.css',
})
export class Updatetable {
  location: string[] = ['Indoor', 'Outdoor', 'NearWindow', 'VIP'];
  formgroup!: FormGroup;
  id: any;
  selectedFile: File | null = null;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Tablesservices, private router: Router, private routing: ActivatedRoute) {
    this.id = routing.snapshot.paramMap.get('id');

    this.formgroup = new FormGroup({
      TableNumber: new FormControl("", [Validators.pattern('^[A-Za-z0-9]+$')]),
      Capacity: new FormControl("", [Validators.pattern('^[0-9]+$')]),
      Location: new FormControl(""),
      TableImage: new FormControl(null)
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.formgroup.get('TableImage')?.setValue(this.selectedFile!.name); 
    } else {
      this.selectedFile = null;
      this.formgroup.get('TableImage')?.setValue(null);
    }
  }

  submit() {
    if (this.formgroup.invalid) {
      this.formgroup.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('id', this.id); 
    formData.append('TableNumber', this.formgroup.value.TableNumber);
    formData.append('Capacity', this.formgroup.value.Capacity);
    formData.append('Location', this.formgroup.value.Location);

    if (this.selectedFile) {
      formData.append('TableImage', this.selectedFile, this.selectedFile.name);
    } 

    this.updatetable(formData);
  }

  get TableNumber() { return this.formgroup.get('TableNumber'); }
  get Capacity() { return this.formgroup.get('Capacity'); }
  get Location() { return this.formgroup.get('Location'); }
  get TableImage() { return this.formgroup.get('TableImage'); }

  updatetable(data: FormData) {
    this.http.updatetable(this.id, data).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        setTimeout(() => this.router.navigate(['gettables']), 2000); 
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
      }
    });
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => {
      this.apiMessage = '';
      this.apiMessageType = '';
    }, 5000);
  }
}
