import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Orderservices } from '../../../../Services/orderservices';
import { _UpdateOrderFeedback } from '../../../../Interfaces/Models/ordersfeedback';

@Component({
  selector: 'app-updatereservationfeedback',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './updateorderfeedback.html',
  styleUrl: './updateorderfeedback.css',
})
export class UpdateOrderFeedback {
  orderfeedback!: _UpdateOrderFeedback;
  reactiveform!: FormGroup;
  id: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Orderservices, private router: Router, routing: ActivatedRoute) {
    this.id = routing.snapshot.paramMap.get('id');
    this.reactiveform = new FormGroup({
      Comment: new FormControl(null, [Validators.pattern("^[A-Za-z0-9 ]+$")]),
      Rating: new FormControl(null, [Validators.pattern("^[0-5]$")]),
    });
  }

  onsubmit() {
    this.reactiveform.markAllAsTouched();
    if (this.reactiveform.invalid) {
      return;
    }
    this.orderfeedback = {
      comment: this.reactiveform.value.Comment,
      rating: this.reactiveform.value.Rating
    };
    this.updateorderfeedback();
  }

  get Comment() { return this.reactiveform.get('Comment'); }
  get Rating() { return this.reactiveform.get('Rating'); }

  updateorderfeedback() {
    this.http.updateorderfeedback(this.id, this.orderfeedback).subscribe({
      next: (res: string) => {
        this.showMessage(res, 'success');
        setTimeout(() => this.router.navigate(['getordersfeedback']), 2000);
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء تحديث التقييم', 'error');
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
