import { Component } from '@angular/core';
import { UserReservationFeedback } from '../../Interfaces/Models/reservationfeedback';
import { ReserationServices } from '../../Services/reseration-services';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Spinner } from "../Models/spinner/spinner";
import { FormsModule } from '@angular/forms';
import { ReservationStatus } from '../../Services/SubComponents/reservation-status';
@Component({
  selector: 'app-reservationsfeedback',
  imports: [CommonModule, Spinner, FormsModule],
  templateUrl: './reservationsfeedback.html',
  styleUrl: './reservationsfeedback.css',
})
export class _Reservationsfeedback {
  loading: boolean = false;
  date: any;
  userreservationsfeedback: UserReservationFeedback[] = [];
  deleteduserreservationsfeedback:UserReservationFeedback[]=[]
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: ReserationServices, private router: ActivatedRoute, private routing: Router,private res:ReservationStatus) {}

  ngOnInit(): void {
      this.res.DeletedReservationsFeedbacks$.subscribe(data=>{
  this.deleteduserreservationsfeedback=data
  })
    this.http.getalldeletedreservationsfeedback().subscribe(res => {
    this.res.setDeletedReservationsFeedbacks(res);
  })
    this.router.params.subscribe(res => {
      this.date = res['date'];
      if (this.date) {
        this.getreservationfeedbackbydate(this.date);
      } else {
        this.getuserreservationsfeedback();
      }
    });
  }

  getuserreservationsfeedback() {
    this.loading = true;
    this.http.getallreservationsfeedback().subscribe({
      next: (res) => {
        this.userreservationsfeedback = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء جلب التقييمات', 'error');
      }
    });
  }

  getreservationfeedbackbydate(date: Date) {
    this.http.getbyreservationfeedbackdate(date).subscribe({
      next: (res) => {
        this.userreservationsfeedback = res;
      },
      error: (err) => {
        this.userreservationsfeedback = [];
      }
    });
  }

  search(date: Date) {
    if (date) {
      this.routing.navigate(['getreservationsfeedback', date]);
    } else {
      this.routing.navigate(['getreservationsfeedback']);
    }
  }

  deletereservationsfeedback(id: number) {
    this.loading = true;
    this.http.deletereservationfeedback(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getuserreservationsfeedback();
        this.http.getalldeletedreservationsfeedback().subscribe(deleted => {
        this.res.setDeletedReservationsFeedbacks(deleted);
      })
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء حذف التقييم', 'error');
      }
    });
  }

  update(id: number) {
    this.routing.navigate(['updatereservationfeedback', id]);
  }

  delete(id: number) {
    this.deletereservationsfeedback(id);
  }

  RestoreDeletedReservationsfeedback() {
    this.routing.navigate(['deletedreservationsfeedback']);
  }

  addreservationfeedback() {
    this.routing.navigate(['reservation']);
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
