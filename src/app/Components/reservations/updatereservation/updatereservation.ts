import { Component } from '@angular/core';
import { _UpdateReservation } from '../../../Interfaces/Models/reservation';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReserationServices } from '../../../Services/reseration-services';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatereservation',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './updatereservation.html',
  styleUrl: './updatereservation.css',
})
export class Updatereservation {
  reservation!: _UpdateReservation;
  reactiveform!: FormGroup;
  id: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: ReserationServices, private router: Router, private routing: ActivatedRoute) {
    this.id = routing.snapshot.paramMap.get('id');

    this.reactiveform = new FormGroup({
      numberOfGuests: new FormControl(null, [Validators.pattern("^[1-9][0-9]*$"), Validators.maxLength(2)]),
      dateOfReservation: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null)
    });
  }

  private formatTime(time: string): string {
    if (!time) return time;
    return time.length === 5 ? `${time}:00` : time;
  }

  onsubmit() {
    if (this.reactiveform.invalid) {
      this.reactiveform.markAllAsTouched();
      return;
    }

    const { numberOfGuests, dateOfReservation, startDate, endDate } = this.reactiveform.value;

    this.reservation = {
      numberOfGuests,
      dateOfReservation,
      startTime: this.formatTime(startDate),
      endTime: this.formatTime(endDate),
    };

    this.updatereservation();
  }

  get numberOfGuests() { return this.reactiveform.get('numberOfGuests'); }
  get dateOfReservation() { return this.reactiveform.get('dateOfReservation'); }
  get startDate() { return this.reactiveform.get('startDate'); }
  get endDate() { return this.reactiveform.get('endDate'); }

  updatereservation() {
    this.http.updatereservation(this.id, this.reservation).subscribe({
      next: (res: string) => {
        this.showMessage(res, 'success');
        setTimeout(() => {
          this.router.navigate(['reservation']);
        }, 2000);
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء تحديث الحجز', 'error');
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
