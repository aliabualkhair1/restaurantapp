import { Component } from '@angular/core';
import { UserReservations } from '../../Interfaces/Models/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Spinner } from '../Models/spinner/spinner';
import { ReserationServices } from '../../Services/reseration-services';
import { FormsModule } from '@angular/forms';
import { ReservationStatus } from '../../Services/SubComponents/reservation-status';

@Component({
  selector: 'app-reservations',
  imports: [CommonModule, Spinner, FormsModule],
  templateUrl: './reservations.html',
  styleUrl: './reservations.css',
})
export class Reservations {
  loading: boolean = false;
  reservations: UserReservations[] = [];
  date: any;
deletedreservation:UserReservations[]=[]
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: ReserationServices, private routing: Router, private router: ActivatedRoute,private res:ReservationStatus) {}

  ngOnInit(): void {
    this.res.deletedReservations$.subscribe(data=>{
  this.deletedreservation=data
    })  
      this.http.getalldeletedreservations().subscribe(res => {
    this.res.setDeletedReservations(res);
  });
    this.router.params.subscribe(res => {
      this.date = res['date'];
      if (this.date) {
        this.getreservationbydate(this.date);
      } else {
        this.getallreservations();
      }
    });
}
  get now(): Date {
    return new Date();
  }
  getallreservations() {
    this.loading = true;
    this.http.getallreservations().subscribe({
      next: (res: any[]) => {
        this.reservations = res.map(r => {
          const date = r.dateOfReservation;
          const time = r.endDate;
          const endDateTime = new Date(`${date}T${time}`);
          return { ...r, endDateTime };
        });
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء جلب الحجوزات', 'error');
      }
    });
  }
  getreservationbydate(date: Date) {
    this.http.getbyreservationdate(date).subscribe({
      next: (res) => {
        this.reservations = res;
      },
      error: (err) => {
        this.reservations = [];
        this.showMessage(err.error || 'حدث خطأ أثناء البحث عن الحجز', 'error');
      }
    });
  }

  search(date: Date) {
    if (date) {
      this.routing.navigate(['reservation', date]);
    } else {
      this.routing.navigate(['reservation']);
    }
  }

  deletereservation(id: number) {
    this.loading = true;
    this.http.deletereservation(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getallreservations();
        this.http.getalldeletedreservations().subscribe(deleted => {
        this.res.setDeletedReservations(deleted);
      });
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء حذف الحجز', 'error');
      }
    });
  }

  confirmreservation(id: number) {
    this.loading = true;
    this.http.confirmreservation(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getallreservations();
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء تأكيد الحجز', 'error');
      }
    });
  }

  confirmation(id: number) {
    this.confirmreservation(id);
  }

  addreservationfeedback(id: number) {
    this.routing.navigate(['addreservationfeedback', id]);
  }

  update(id: number) {
    this.routing.navigate(['updatereservation', id]);
  }

  delete(id: number) {
    this.deletereservation(id);
  }

  RestoreDeletedReservations() {
    this.routing.navigate(['deletedreservations']);
  }

  GetReservationsFeedback() {
    this.routing.navigate(['getreservationsfeedback']);
  }

  gettables() {
    this.routing.navigate(['gettables']);
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
