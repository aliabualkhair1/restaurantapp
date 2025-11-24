import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuService } from '../../../../../Services/menuservice';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoryinterface } from '../../../../../Interfaces/Models/categoryinterface';
import { AddMenu } from '../../../../../Interfaces/Models/menuinterface';
@Component({
  selector: 'app-addmenu',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './addmenu.html',
  styleUrls: ['./addmenu.css'],
})
export class Addmenu implements OnInit {

  reactiveform!: FormGroup;
  addmenu!: AddMenu;
  category: Categoryinterface[] = [];

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(
    private http: MenuService,
    private routing: ActivatedRoute,
    private router: Router
  ) {
    this.reactiveform = new FormGroup({
      CategoryId: new FormControl("", [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),
      MenuName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z\u0621-\u064A ]+$')
      ]),
      Description: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z\u0621-\u064A ]+$')
      ])
    });
  }

  ngOnInit(): void {
    this.getcategory();
  }

  get CategoryId() { return this.reactiveform.get('CategoryId'); }
  get MenuName() { return this.reactiveform.get('MenuName'); }
  get Description() { return this.reactiveform.get('Description'); }

  getcategory() {
    this.http.getallcategories().subscribe({
      next: (res: Categoryinterface[]) => this.category = res,
      error: () => this.category = []
    });
  }

  submit() {
    this.reactiveform.markAllAsTouched();
    if (this.reactiveform.invalid) return;

    this.addmenu = {
      categoryId: this.reactiveform.value.CategoryId,
      menuName: this.reactiveform.value.MenuName,
      description: this.reactiveform.value.Description
    };

    this.addmenubycategoryid();
  }

  addmenubycategoryid() {
    this.http.addmenu(this.addmenu).subscribe({
      next: (res) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => {
          this.apiMessage = '';
          this.router.navigate(['menu']);
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
