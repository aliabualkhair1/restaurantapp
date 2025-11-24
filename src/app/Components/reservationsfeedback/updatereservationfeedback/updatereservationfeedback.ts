import { Component } from '@angular/core';
import { _UpdateReservationFeedback } from '../../../Interfaces/Models/reservationfeedback';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReserationServices } from '../../../Services/reseration-services';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatereservationfeedback',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './updatereservationfeedback.html',
  styleUrl: './updatereservationfeedback.css',
})
export class Updatereservationfeedback {
  reservationfeedback!: _UpdateReservationFeedback;
  reactiveform!: FormGroup;
  id: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: ReserationServices, private router: Router, routing: ActivatedRoute) {
    this.id = routing.snapshot.paramMap.get('id');

    this.reactiveform = new FormGroup({
      Comment: new FormControl(null, [Validators.pattern("^[A-Za-z0-9\u0600-\u06FF ]+$")]),
      Rating: new FormControl(null, [Validators.pattern("^[0-5]$")]),
    });
  }

  get Comment() { return this.reactiveform.get('Comment'); }
  get Rating() { return this.reactiveform.get('Rating'); }

  onsubmit() {
    this.reactiveform.markAllAsTouched();
    if (this.reactiveform.invalid) return;

    this.reservationfeedback = {
      comment: this.reactiveform.value.Comment,
      rating: this.reactiveform.value.Rating
    };

    this.updatereservationfeedback();
  }

  updatereservationfeedback() {
    this.http.updatereservationfeedback(this.id, this.reservationfeedback).subscribe({
      next: (res: string) => {
        this.showMessage(res, 'success');
        setTimeout(() => this.router.navigate(['getreservationsfeedback']), 2000);
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
