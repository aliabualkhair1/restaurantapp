import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Menuitemsservice } from '../../../../../../Services/menuitemsservice';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemsAvailable } from '../../../../../../Interfaces/Models/menuiteminterface';
import { Menuitemsstatus } from '../../../../../../Services/SubComponents/menuitemsstatus';

@Component({
  selector: 'app-updatequantity',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './updatequantity.html',
  styleUrl: './updatequantity.css',
})
export class Updatequantity {
  reactiveform!: FormGroup;
  menuitems!: MenuItemsAvailable;
  id!: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Menuitemsservice, private routing: ActivatedRoute, private router: Router) {
    this.id = this.routing.snapshot.paramMap.get('id');
    this.reactiveform = new FormGroup({
      Quantity: new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')])
    });
  }

  get Quantity() {
    return this.reactiveform.get('Quantity');
  }

  submit() {
    this.reactiveform.markAllAsTouched();
    if (this.reactiveform.invalid) return;

    this.menuitems = {
      quantity: this.reactiveform.value.Quantity,
    };
    this.updatequantity(this.id);
  }

  updatequantity(id: number) {
    this.http.availablemenuitems(this.id, this.menuitems).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        setTimeout(() => this.router.navigate(['unavailable']), 1000);
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
