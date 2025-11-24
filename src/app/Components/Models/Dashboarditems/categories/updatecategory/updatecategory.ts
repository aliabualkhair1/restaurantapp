import { Component } from "@angular/core"
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { CommonModule } from "@angular/common"
import { AddOrUpdateCategory } from "../../../../../Interfaces/Models/categoryinterface"
import { CategoryServices } from "../../../../../Services/category-services"

@Component({
  selector: 'app-updatecategory',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './updatecategory.html',
  styleUrl: './updatecategory.css',
})
export class Updatecategory {
  formhandel!: FormGroup
  id: any
  updatecategories!: AddOrUpdateCategory

  apiMessage: string = ''
  apiMessageType: 'success' | 'error' = 'success'

  constructor(private http: CategoryServices, private router: Router, private routing: ActivatedRoute) {
    this.id = this.routing.snapshot.paramMap.get('id')
    this.formhandel = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z\u0621-\u064A ]+$")])
    })
  }

  get categoryname() {
    return this.formhandel.get('name')
  }

  submit() {
    this.formhandel.markAllAsTouched()
    if (!this.formhandel.valid) return

    this.updatecategories = {
      name: this.formhandel.value.name
    }
    this.updatecategory()
  }

  updatecategory() {
    this.http.updatecategorybyid(this.id, this.updatecategories).subscribe({
      next: (res) => {
        this.showMessage(res, 'success')
        setTimeout(() => this.router.navigate(['/categories']), 1000)
      },
      error: (err) => {
        this.showMessage(err.error, 'error')
      }
    })
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message
    this.apiMessageType = type
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000)
  }
}
