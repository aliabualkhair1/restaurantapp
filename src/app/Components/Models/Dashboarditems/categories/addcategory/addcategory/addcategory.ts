import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {  AddOrUpdateCategory, Categoryinterface } from '../../../../../../Interfaces/Models/categoryinterface';
import { CategoryServices } from '../../../../../../Services/category-services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcategory',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './addcategory.html',
  styleUrls: ['./addcategory.css'],
})
export class Addcategory {
  formhandel!: FormGroup;
  addcategories!: AddOrUpdateCategory;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: CategoryServices, private router: Router) {
    this.formhandel = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z\u0621-\u064A ]+$")])
    });
  }

  get categoryname() {
    return this.formhandel.get('name');
  }

  submit() {
    this.formhandel.markAllAsTouched();
    if (this.formhandel.invalid) return;

    this.addcategories = {
      name: this.formhandel.value.name
    };
    this.addcategory();
  }

  addcategory() {
    this.http.addcategory(this.addcategories).subscribe({
      next: (res) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => {
          this.apiMessage = '';
          this.router.navigate(['categories']);
        }, 1000);
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء الإضافة';
        this.apiMessageType = 'error';
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }
}
