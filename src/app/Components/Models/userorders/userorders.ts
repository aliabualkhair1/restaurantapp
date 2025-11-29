import { Component } from '@angular/core';
import { Order } from '../../../Interfaces/Models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderservices } from '../../../Services/orderservices';
import { Spinner } from "../spinner/spinner";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ordersstatus } from '../../../Services/SubComponents/ordersstatus';
import { TranslationPipe } from "../../../TranslationPipe/translation-pipe";

@Component({
  selector: 'app-userorders',
  imports: [Spinner, CommonModule, FormsModule, TranslationPipe],
  templateUrl: './userorders.html',
  styleUrl: './userorders.css',
})
export class Userorders {
  orders: Order[] = [];
  deletedorders: Order[] = [];
  loading: boolean = false;
  id: any;
  date: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Orderservices, private routing: Router, private router: ActivatedRoute ,private oi:Ordersstatus) {}

  ngOnInit(): void {
this.oi.DeletedOrders$.subscribe(data=>{
this.deletedorders=data
    })
    this.http.getalldeletedorders().subscribe(res=>{
this.oi.setDeletedOrders(res)
    })
    this.router.params.subscribe(res => {
      this.date = res['date'];
      if (this.date) {
        this.getorderbydate(this.date);
      } else {
        this.getallorders();
      }
    });
  }

  getallorders() {
    this.loading = true;
    this.http.getallorders().subscribe({
      next: (res) => {
        this.orders = res;
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error || "An error occurred", 'error');
        this.loading = false;
      }
    });
  }

  getorderbydate(date: Date) {
    this.loading = true;
    this.http.getbyorderdate(date).subscribe({
      next: (res) => {
        this.orders = res;
        this.loading = false;
      },
      error: (err) => {
        this.orders = [];
        this.showMessage(err.error || "Error fetching orders by date", 'error');
        this.loading = false;
      }
    });
  }

  search(date: Date) {
    if (date) {
      this.routing.navigate(['order', date]);
    } else {
      this.routing.navigate(['order']);
    }
  }

  deleteorder(id: number) {
    this.loading = true;
    this.http.deleteorder(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getallorders();
        this.http.getalldeletedorders().subscribe(res=>{
        this.oi.setDeletedOrders(res)
    })
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
        this.loading = false;
      }
    });
  }

  confirmorder(id: number) {
    this.loading = true;
    this.http.confirmorder(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getallorders();
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
        this.loading = false;
      }
    });
  }

  getorderitemsbyorderid(id: number) {
    this.routing.navigate(['userorderitems', id]);
  }

  confirm(id: number) {
    this.confirmorder(id);
  }

  addorderfeedback(id: number) {
    this.routing.navigate(['addorderfeedback', id]);
  }

  getordersfeedback() {
    this.routing.navigate(['getordersfeedback']);
  }

  delete(id: number) {
    this.deleteorder(id);
  }

  getdeletedorders() {
    this.routing.navigate(['deletedorders']);
  }

  addorder() {
    this.routing.navigate(['menu']);
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
