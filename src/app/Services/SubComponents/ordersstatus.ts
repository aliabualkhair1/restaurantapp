import { Injectable } from '@angular/core';
import { Order } from '../../Interfaces/Models/order';
import { BehaviorSubject } from 'rxjs';
import { _UserOrdersFeedback } from '../../Interfaces/Models/ordersfeedback';
import { Orderitem } from '../../Interfaces/Models/orderitem';

@Injectable({
  providedIn: 'root'
})
export class Ordersstatus {
  private DeletedOrders = new BehaviorSubject<Order[]>([]);
    DeletedOrders$ = this.DeletedOrders.asObservable();
    setDeletedOrders(res: Order[]) {
      this.DeletedOrders.next(res);
    }
    private DeletedOrdersFeedbacks = new BehaviorSubject<_UserOrdersFeedback[]>([]);
    DeletedOrdersFeedbacks$ = this.DeletedOrdersFeedbacks.asObservable();
    setDeletedOrdersFeedbacks(res: _UserOrdersFeedback[]) {
      this.DeletedOrdersFeedbacks.next(res);
    }
    private DeletedOrderItems = new BehaviorSubject<Orderitem[]>([]);
    DeletedOrderItems$ = this.DeletedOrderItems.asObservable();
    setDeletedOrderItems(res: Orderitem[]) {
      this.DeletedOrderItems.next(res);
    }
}
