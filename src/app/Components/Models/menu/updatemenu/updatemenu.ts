import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MenuService } from "../../../../Services/menuservice";
import { UpdateMenu } from "../../../../Interfaces/Models/menuinterface";
import { Categoryinterface } from "../../../../Interfaces/Models/categoryinterface";

@Component({
  selector: 'app-updatemenu',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './updatemenu.html',
  styleUrl: './updatemenu.css',
})
export class Updatemenu implements OnInit {
  reactiveform!: FormGroup;
  menu!: UpdateMenu;
  id!: any;
  category: Categoryinterface[] = [];
  value: any;
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: MenuService, private routing: ActivatedRoute, private router: Router) {
    this.id = this.routing.snapshot.paramMap.get('id');
    this.reactiveform = new FormGroup({
      CategoryId: new FormControl(null, [Validators.pattern('^[0-9]+$')]),
      MenuName: new FormControl(null, [Validators.pattern("^[a-zA-Z\u0621-\u064A ]+$")]),
      Description: new FormControl(null, [Validators.pattern("^[a-zA-Z\u0621-\u064A ]+$")]),
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
      next: (res: Categoryinterface[]) => { this.category = res; },
      error: (err) => { this.category = []; }
    });
  }

  getcategoryid(event: any) {
    this.value = event.target.value;
  }

  submit() {
    this.reactiveform.markAllAsTouched();
    if (this.reactiveform.invalid) return;

    this.menu = {
      categoryId: this.value,
      menuName: this.reactiveform.value.MenuName,
      description: this.reactiveform.value.Description
    };

    const correctvalues = Object.fromEntries(
      Object.entries(this.menu).map(([key, value]) => [key, value === '' ? null : value])
    );

    this.updatemenubymenuid(correctvalues);
  }

  updatemenubymenuid(correctvalues: any) {
    this.http.updatemenu(correctvalues, this.id).subscribe({
      next: (res) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => {
          this.apiMessage = '';
          this.router.navigate(['menu']);
        }, 1000);
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء التحديث';
        this.apiMessageType = 'error';
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }
}
