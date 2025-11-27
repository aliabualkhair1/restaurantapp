import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReserationServices } from '../../../Services/reseration-services';
import { _AddReservation } from '../../../Interfaces/Models/reservation';

@Component({
  selector: 'app-add-reservation',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-reservation.html',
  styleUrl: './add-reservation.css',
})
export class AddReservation {
  reservation!: _AddReservation;
  reactiveform!: FormGroup;
  id: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(
    private http: ReserationServices,
    private router: Router,
    private routing: ActivatedRoute
  ) {
    this.id = this.routing.snapshot.paramMap.get('id');

    this.reactiveform = new FormGroup({
      numberOfGuests: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[1-9][0-9]*$"),
        Validators.maxLength(2)
      ]),
      dateOfReservation: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
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

    const { numberOfGuests, dateOfReservation, startDate, endDate } =
      this.reactiveform.value;

    this.reservation = {
      tableId: this.id,
      numberOfGuests,
      dateOfReservation,
      startDate: this.formatTime(startDate),
      endDate: this.formatTime(endDate),
    };

    this.addreservation();
  }

  get numberOfGuests() { return this.reactiveform.get('numberOfGuests'); }
  get dateOfReservation() { return this.reactiveform.get('dateOfReservation'); }
  get startDate() { return this.reactiveform.get('startDate'); }
  get endDate() { return this.reactiveform.get('endDate'); }

  addreservation() {
    this.http.addreservation(this.reservation).subscribe({
      next: (res: any) => {
        this.showMessage(res, 'success');
        this.router.navigate(['reservation']);
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء إضافة الحجز', 'error');
      },
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
