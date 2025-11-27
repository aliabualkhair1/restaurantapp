import { Component } from '@angular/core';
import { ReserationServices } from '../../../Services/reseration-services';
import { UserReservations } from '../../../Interfaces/Models/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from "../../Models/spinner/spinner";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationStatus } from '../../../Services/SubComponents/reservation-status';
@Component({
  selector: 'app-getdeletedreservations',
  imports: [Spinner, CommonModule, FormsModule],
  templateUrl: './getdeletedreservations.html',
  styleUrl: './getdeletedreservations.css',
})
export class Getdeletedreservations {
  loading: boolean = false;
  date: any;
  reservations: UserReservations[] = [];

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: ReserationServices, private routing: Router, private router: ActivatedRoute,private res:ReservationStatus) {}

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.date = res['date'];
      if (this.date) {
        this.getdeletedreservationbydate(this.date);
      } else {
        this.getalldeletedreservations();
      }
    });
  }

  getalldeletedreservations() {
    this.loading = true;
    this.http.getalldeletedreservations().subscribe({
      next: (res) => {
        this.reservations = res;
        this.res.setDeletedReservations(res)
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء جلب الحجوزات', 'error');
      }
    });
  }

  getdeletedreservationbydate(date: Date) {
    this.http.getdeletedbyreservationdate(date).subscribe({
      next: (res) => {
        this.reservations = res;
      },
      error: () => {
        this.reservations = [];
      }
    });
  }

  search(date: Date) {
    if (date) {
      this.routing.navigate(['deletedreservations', date]);
    } else {
      this.routing.navigate(['deletedreservations']);
    }
  }

  restorereservation(id: number) {
    this.loading = true;
    this.http.restorereservation(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getalldeletedreservations();
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء استعادة الحجز', 'error');
      }
    });
  }

  restore(id: number) {
    this.restorereservation(id);
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
