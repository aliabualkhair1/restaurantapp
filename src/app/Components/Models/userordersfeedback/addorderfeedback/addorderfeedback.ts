import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Orderservices } from '../../../../Services/orderservices';
import { _AddOrderFeedback } from '../../../../Interfaces/Models/ordersfeedback';

@Component({
  selector: 'app-addorderfeedback',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './addorderfeedback.html',
  styleUrl: './addorderfeedback.css',
})
export class Addorderfeedback {
  orderfeedback!: _AddOrderFeedback;
  reactiveform!: FormGroup;
  id: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(
    private http: Orderservices,
    private router: Router,
    private routing: ActivatedRoute
  ) {
    this.id = this.routing.snapshot.paramMap.get('id');

    this.reactiveform = new FormGroup({
      Comment: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      Rating: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-5]$"),
      ]),
    });
  }

  get Comment() { return this.reactiveform.get('Comment'); }
  get Rating() { return this.reactiveform.get('Rating'); }

  onsubmit() {
    if (this.reactiveform.invalid) {
      this.reactiveform.markAllAsTouched();
      return;
    }

    this.orderfeedback = {
      orderId: this.id,
      comment: this.Comment?.value,
      rating: this.Rating?.value,
    };

    this.addorderfeedback();
  }

  addorderfeedback() {
    this.http.addorderfeedback(this.orderfeedback).subscribe({
      next: (res: string) => {
        this.showMessage(res, 'success');
        setTimeout(() => this.router.navigate(['getordersfeedback']), 2000);
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء إضافة التقييم', 'error');
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
