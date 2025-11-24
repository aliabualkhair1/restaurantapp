import { Component, OnInit } from '@angular/core';
import { Spinner } from "../../Models/spinner/spinner";
import { CommonModule } from '@angular/common';
import { AddOrder, OrderItems } from '../../../Interfaces/Models/order';
import { Orderservices } from '../../../Services/orderservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cart',
  imports: [Spinner, CommonModule],
  templateUrl: './user-cart.html',
  styleUrls: ['./user-cart.css'],
})
export class UserCart implements OnInit {

  loading: boolean = false;
  order: OrderItems[] = [];
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Orderservices, private router: Router) {}

  ngOnInit(): void {
    this.getorder();
  }

  getFinalOrder(): AddOrder {
    const exist = localStorage.getItem('Orders');
    if (!exist) return { orderItems: [] };
    const storedOrders: AddOrder[] = JSON.parse(exist);
    const finalOrder: AddOrder = { orderItems: [] };
    storedOrders.forEach(o => finalOrder.orderItems.push(...o.orderItems));
    return finalOrder;
  }

  getorder() {
    const exist = localStorage.getItem('Orders');
    if (exist) {
      const storedOrders: AddOrder[] = JSON.parse(exist);
      this.order = storedOrders.flatMap(o => o.orderItems);
    }
  }

  adduserorder() {
    const finalorder = this.getFinalOrder();
    this.http.addorder(finalorder).subscribe({
      next: (res) => {
this.showMessage(res || 'تمت العملية بنجاح', 'success');
setTimeout(() => {
  this.router.navigate(['order']);
  localStorage.removeItem('Orders');
}, 1000);
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
      }
    });
  }

  delete(menuitemid: number) {
    const stored = localStorage.getItem('Orders');
    if (!stored) return;
    let orderitems = JSON.parse(stored);
    orderitems = orderitems.filter(
      (o: any) => o.orderItems[0].menuItemId !== menuitemid
    );
    localStorage.setItem('Orders', JSON.stringify(orderitems));
    this.order = orderitems.map((o: any) => o.orderItems[0]);
    this.showMessage('تم حذف العنصر بنجاح', 'success');

  }

  menu() {
    this.router.navigate(['menu']);
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000);
  }
}
