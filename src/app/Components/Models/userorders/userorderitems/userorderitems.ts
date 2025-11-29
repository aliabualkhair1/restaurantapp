import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Spinner } from '../../spinner/spinner';
import { Orderitem } from '../../../../Interfaces/Models/orderitem';
import { Orderservices } from '../../../../Services/orderservices';
import { UpdateUserOrder } from "../update-user-order/update-user-order";
import { Order } from '../../../../Interfaces/Models/order';
import { Ordersstatus } from '../../../../Services/SubComponents/ordersstatus';

@Component({
  selector: 'app-orderitems',
  standalone: true, // افتراض استخدام Standalone Component
  imports: [CommonModule, Spinner, UpdateUserOrder],
  templateUrl: './userorderitems.html',
  styleUrl: './userorderitems.css',
})
export class UserOrderItems implements OnInit {
  id: any;
  orderitem: Orderitem[] = [];
  loading: boolean = false;
  deletedorderitem: Orderitem[] = [];
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';
  orderstatus!:boolean

  constructor(private http: Orderservices, private routing: ActivatedRoute, private router: Router,private oi:Ordersstatus) {
    this.id = this.routing.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.oi.DeletedOrderItems$.subscribe(data=>{
this.deletedorderitem=data
    })
    this.http.getdeleteditems(this.id).subscribe(res=>{
this.oi.setDeletedOrderItems(res)
    })
    this.getorderitemsbyorderid();
  }

  getorderitemsbyorderid() {
    this.loading = true;
    this.http.getorderitemsbyorderid(this.id).subscribe({
      next: (res: Order[] | any) => {
        if (res && res.length > 0) {
          this.orderitem = res[0].orderItems;
          this.orderstatus=res[0].isPaid
        } else {
          this.orderitem = [];
        }
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error || "An error occurred", 'error');
        this.loading = false;
      }
    });
  }

  deleteorderitem(itemid: number) {
    this.loading = true;
    this.http.deleteitem(itemid).subscribe({
      next: (res: any) => {
        this.showMessage(res, 'success');
        this.getorderitemsbyorderid();
            this.http.getdeleteditems(this.id).subscribe(res=>{
            this.oi.setDeletedOrderItems(res)
    })
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
        this.loading = false;
      }
    });
  }

  delete(itemid: number) {
    this.deleteorderitem(itemid);
  }

  getdeletedorderitems(id:number) {
    this.router.navigate(['deleteduseritems',id]);
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => {
      this.apiMessage = '';
      this.apiMessageType = '';
    }, 5000);
  }
  handleChildMessage(event: { message: string; type: 'success' | 'error' }) {
  this.showMessage(event.message, event.type);
  this.getorderitemsbyorderid();
}

}
