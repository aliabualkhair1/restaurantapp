import { Component } from '@angular/core';
import { _AddReservationFeedback } from '../../../Interfaces/Models/reservationfeedback';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReserationServices } from '../../../Services/reseration-services';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addreservationfeedback',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './addreservationfeedback.html',
  styleUrls: ['./addreservationfeedback.css'],
})
export class Addreservationfeedback {

  reservationfeedback!: _AddReservationFeedback;
  reactiveform!: FormGroup;
  id: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: ReserationServices, private router: Router, routing: ActivatedRoute) {
    this.id = routing.snapshot.paramMap.get('id');

    this.reactiveform = new FormGroup({
      Comment: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[\u0600-\u06FFa-zA-Z0-9 ]+$")
      ]),
      Rating: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(5)
      ]),
    });
  }

  get Comment() { return this.reactiveform.get('Comment'); }
  get Rating() { return this.reactiveform.get('Rating'); }

  onsubmit() {
    this.reactiveform.markAllAsTouched();
    if (this.reactiveform.invalid) return;

    this.reservationfeedback = {
      reservationId: this.id,
      comment: this.Comment?.value,
      rating: this.Rating?.value
    };

    this.addreservation();
  }

  addreservation() {
    this.http.addreservationfeedback(this.reservationfeedback).subscribe({
      next: (res: string) => {
        this.showMessage(res, 'success');
        setTimeout(() => this.router.navigate(['getreservationsfeedback']), 1500);
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
