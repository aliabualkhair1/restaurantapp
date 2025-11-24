import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Menuitemsservice } from "../../../../../Services/menuitemsservice";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-updatemenuitem',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './updatemenuitem.html',
  styleUrl: './updatemenuitem.css',
})
export class Updatemenuitem {
  formgroup!: FormGroup;
  id: any;
  selectedFile: File | null = null;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Menuitemsservice, private router: Router, private routing: ActivatedRoute) {
    this.id = this.routing.snapshot.paramMap.get('id');
    this.formgroup = new FormGroup({
      ItemName: new FormControl("", [Validators.pattern('^[a-zA-Z\u0621-\u064A ]+$')]),
      ItemImage: new FormControl(null),
      Quantity: new FormControl("", [Validators.pattern('^[0-9]+$')]),
      Price: new FormControl("", [Validators.pattern('^[0-9]+$')])
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.formgroup.get('ItemImage')?.setValue(this.selectedFile?.name);
    } else {
      this.selectedFile = null;
      this.formgroup.get('ItemImage')?.setValue(null);
    }
  }

  submit() {
    this.formgroup.markAllAsTouched();
    if (this.formgroup.invalid) return;

    const formData = new FormData();
    formData.append('MenuId', this.id);
    formData.append('ItemName', this.formgroup.value.ItemName);
    formData.append('Quantity', this.formgroup.value.Quantity);
    formData.append('Price', this.formgroup.value.Price);

    if (this.selectedFile) {
      formData.append('ItemImage', this.selectedFile, this.selectedFile.name);
    }

    this.updatemenuitem(formData);
  }

  get ItemName() { return this.formgroup.get('ItemName'); }
  get Quantity() { return this.formgroup.get('Quantity'); }
  get Price() { return this.formgroup.get('Price'); }
  get ItemImage() { return this.formgroup.get('ItemImage'); }

  updatemenuitem(data: FormData) {
    this.http.updatemenuitems(this.id, data).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        setTimeout(() => this.router.navigate(['menuitems']), 1000);
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء التحديث', 'error');
      }
    });
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000);
  }
}
