import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserReservationFeedback } from '../../../Interfaces/Models/reservationfeedback';
import { ReserationServices } from '../../../Services/reseration-services';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from "../../Models/spinner/spinner";
import { ReservationStatus } from '../../../Services/SubComponents/reservation-status';
@Component({
  selector: 'app-getdeletedreservationfeedback',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Spinner],
  templateUrl: './getdeletedreservationfeedback.html',
  styleUrl: './getdeletedreservationfeedback.css',
})
export class Getdeletedreservationfeedback {
  loading: boolean = false;
  userreservationsfeedback: UserReservationFeedback[] = [];
  date: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: ReserationServices, private router: ActivatedRoute, private routing: Router,private res:ReservationStatus) {}

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.date = res['date'];
      if (this.date) {
        this.getdeletedreservationfeedbackbydate(this.date);
      } else {
        this.getdeleteduserreservationsfeedback();
      }
    });
  }

  getdeleteduserreservationsfeedback() {
    this.loading = true;
    this.http.getalldeletedreservationsfeedback().subscribe({
      next: (res) => {
        this.userreservationsfeedback = res;
        this.res.setDeletedReservationsFeedbacks(res)
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || "حدث خطأ أثناء جلب التقييمات", 'error');
      }
    });
  }

  getdeletedreservationfeedbackbydate(date: Date) {
    this.http.getdeletedbyreservationfeedbackdate(date).subscribe({
      next: (res) => {
        this.userreservationsfeedback = res;
      },
      error: () => {
        this.userreservationsfeedback = [];
      }
    });
  }

  search(date: Date) {
    if (date) {
      this.routing.navigate(['deletedreservationsfeedback', date]);
    } else {
      this.routing.navigate(['deletedreservationsfeedback']);
    }
  }

  restorereservationsfeedback(id: number) {
    this.loading = true;
    this.http.restorereservationfeedback(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.loading = false;
        this.getdeleteduserreservationsfeedback();
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || "حدث خطأ أثناء استعادة التقييم", 'error');
      }
    });
  }

  restore(id: number) {
    this.restorereservationsfeedback(id);
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
