import { Component } from "@angular/core"
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { Menuitemsservice } from "../../../../Services/menuitemsservice"
import { ActivatedRoute, Router } from "@angular/router"
import { CommonModule } from "@angular/common"

@Component({
  selector: 'app-addmenuitem',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addmenuitem.html',
  styleUrl: './addmenuitem.css',
})
export class Addmenuitem {
  formgroup!: FormGroup
  id: any
  selectedFile: File | null = null;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Menuitemsservice, private router: Router, private routing: ActivatedRoute) {
    this.id = this.routing.snapshot.paramMap.get('id')
    this.formgroup = new FormGroup({
      ItemName: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z\u0621-\u064A ]+$')]),
      ItemImage: new FormControl(null, [Validators.required]),
      Quantity: new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')]),
      Price: new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')])
    })
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.formgroup.get('ItemImage')?.setValue(this.selectedFile!.name);
    } else {
      this.selectedFile = null;
      this.formgroup.get('ItemImage')?.setValue(null);
    }
  }

  submit() {
    if (this.formgroup.invalid) {
      this.formgroup.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('MenuId', this.id);
    formData.append('ItemName', this.formgroup.value.ItemName);
    formData.append('Quantity', this.formgroup.value.Quantity);
    formData.append('Price', this.formgroup.value.Price);

    if (this.selectedFile) {
      formData.append('ItemImage', this.selectedFile, this.selectedFile.name);
    }

    this.addmenuitem(formData);
  }

  get ItemName() {
    return this.formgroup.get('ItemName')
  }

  get Quantity() {
    return this.formgroup.get('Quantity')
  }

  get Price() {
    return this.formgroup.get('Price')
  }

  get ItemImage() {
    return this.formgroup.get('ItemImage')
  }

  addmenuitem(data: FormData) {
    this.http.addmenuitems(data).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.router.navigate(['menuitems', this.id])
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
      }
    })
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
