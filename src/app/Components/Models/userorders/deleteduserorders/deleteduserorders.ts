import { Component } from '@angular/core';
import { Order } from '../../../../Interfaces/Models/order';
import { Orderservices } from '../../../../Services/orderservices';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from "../../spinner/spinner";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deleteduserorders',
  imports: [Spinner, CommonModule, FormsModule],
  templateUrl: './deleteduserorders.html',
  styleUrl: './deleteduserorders.css',
})
export class Deleteduserorders {
  orders: Order[] = [];
  loading: boolean = false;
  id: any;
  date: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Orderservices, private routing: Router, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.date = res['date'];
      if (this.date) {
        this.getdeletedorderbydate(this.date);
      } else {
        this.getalldeletedorders();
      }
    });
  }

  getalldeletedorders() {
    this.loading = true;
    this.http.getalldeletedorders().subscribe({
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

  getdeletedorderbydate(date: Date) {
    this.http.getdeletedbyorderdate(date).subscribe({
      next: (res) => {
        this.orders = res;
      },
      error: (err) => {
        this.showMessage(err.error || "Error fetching orders by date", 'error');
      }
    });
  }

  search(date: Date) {
    if (date) {
      this.routing.navigate(['deletedorders', date]);
    } else {
      this.routing.navigate(['deletedorders']);
    }
  }

  restoreorder(id: number) {
    this.loading = true;
    this.http.restoreorder(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getalldeletedorders();
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
        this.loading = false;
      }
    });
  }

  restoreorders(id: number) {
    this.restoreorder(id);
  }
restoreorderitems(id:number){
    this.routing.navigate(['deleteduseritems',id]);
}
isItemDeleted(order: Order): boolean {
  return order.orderItems?.every(item => item.isDeleted) ?? false;
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
