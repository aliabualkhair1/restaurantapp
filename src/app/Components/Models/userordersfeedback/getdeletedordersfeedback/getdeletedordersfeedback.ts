import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { _UserOrdersFeedback } from '../../../../Interfaces/Models/ordersfeedback';
import { Orderservices } from '../../../../Services/orderservices';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from "../../spinner/spinner";

@Component({
  selector: 'app-getdeletedreservationfeedback',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Spinner],
  templateUrl: './getdeletedordersfeedback.html',
  styleUrl: './getdeletedordersfeedback.css',
})
export class Getdeletedorderfeedback {
  loading: boolean = false;
  userordersfeedback: _UserOrdersFeedback[] = [];
  date: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Orderservices, private router: ActivatedRoute, private routing: Router) {}

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.date = res['date'];
      if (this.date) {
        this.getdeletedorderfeedbackbydate(this.date);
      } else {
        this.getdeletedordersfeedback();
      }
    });
  }

  getdeletedordersfeedback() {
    this.loading = true;
    this.http.getalldeletedordersfeedback().subscribe({
      next: (res) => {
        this.userordersfeedback = res;
        this.loading = false;
      },
      error: (err) => {
        this.userordersfeedback = [];
        this.showMessage('حدث خطأ أثناء جلب التقييمات المحذوفة', 'error');
        this.loading = false;
      }
    });
  }

  getdeletedorderfeedbackbydate(date: Date) {
    this.http.getdeletedbyorderfeedbackdate(date).subscribe({
      next: (res) => {
        this.userordersfeedback = res;
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء البحث حسب التاريخ', 'error');
      }
    });
  }

  search(date: Date) {
    if (date) {
      this.routing.navigate(['deletedordersfeedback', date]);
    } else {
      this.routing.navigate(['deletedordersfeedback']);
    }
  }

  restoreordersfeedback(id: number) {
    this.loading = true;
    this.http.restoreorderfeedback(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.loading = false;
        this.getdeletedordersfeedback();
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء استعادة التقييم', 'error');
      }
    });
  }

  restore(id: number) {
    this.restoreordersfeedback(id);
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
