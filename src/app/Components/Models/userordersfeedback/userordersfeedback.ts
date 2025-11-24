import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Spinner } from '../spinner/spinner';
import { Orderservices } from '../../../Services/orderservices';
import { _UserOrdersFeedback } from '../../../Interfaces/Models/ordersfeedback';

@Component({
  selector: 'app-reservationsfeedback',
  imports: [CommonModule, Spinner, FormsModule],
  templateUrl: './userordersfeedback.html',
  styleUrl: './userordersfeedback.css',
})
export class UserOrdersFeedback {
  loading: boolean = false;
  date: any;
  userordersfeedback: _UserOrdersFeedback[] = [];

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Orderservices, private router: ActivatedRoute, private routing: Router) {}

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.date = res['date'];
      if (this.date) {
        this.getorderfeedbackbydate(this.date);
      } else {
        this.getuserordersfeedback();
      }
    });
  }

  getuserordersfeedback() {
    this.loading = true;
    this.http.getallordersfeedback().subscribe({
      next: (res) => {
        this.userordersfeedback = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage('حدث خطأ أثناء جلب التقييمات', 'error');
      }
    });
  }

  getorderfeedbackbydate(date: Date) {
    this.http.getbyorderfeedbackdate(date).subscribe({
      next: (res) => {
        this.userordersfeedback = res;
      },
      error: () => {
        this.userordersfeedback = [];
      }
    });
  }

  search(date: Date) {
    if (date) {
      this.routing.navigate(['getordersfeedback', date]);
    } else {
      this.routing.navigate(['getordersfeedback']);
    }
  }

  deleteordersfeedback(id: number) {
    this.loading = true;
    this.http.deleteorderfeedback(id).subscribe({
      next: (res) => {
        this.showMessage('تم حذف التقييم بنجاح', 'success');
        this.loading = false;
        this.getuserordersfeedback();
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء حذف التقييم', 'error');
      }
    });
  }

  update(id: number) {
    this.routing.navigate(['updateorderfeedback', id]);
  }

  delete(id: number) {
    this.deleteordersfeedback(id);
  }

  RestoreDeletedOrdersfeedback() {
    this.routing.navigate(['deletedordersfeedback']);
  }

  orderfeedback() {
    this.routing.navigate(['order']);
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
