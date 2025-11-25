import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dashboardservice } from '../../../Services/dashboardservice';
import { ApiResponse, Orderitem } from '../../../Interfaces/Models/orderitem';
import { Spinner } from '../spinner/spinner';
import { CommonModule } from '@angular/common';
import { Order } from '../../../Interfaces/Models/order';
@Component({
  selector: 'app-orderitems',
  imports: [CommonModule, Spinner],
  templateUrl: './orderitems.html',
  styleUrl: './orderitems.css',
})
export class Orderitems implements OnInit {
  id:any
  orderitem:Orderitem[]=[]
  loading:boolean=false
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';
constructor(private http:Dashboardservice,private routing:ActivatedRoute){
this.id=this.routing.snapshot.paramMap.get('id')
}
  ngOnInit(): void {
this.getorderitemsbyorderid()
  }

  getorderitemsbyorderid() {
    this.loading = true;
    this.http.getorderitemsbyorderid(this.id).subscribe({
      next: (res: Order[] | any) => {
        if (res && res.length > 0) {
          this.orderitem = res[0].orderItems;
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
    private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => {
      this.apiMessage = '';
      this.apiMessageType = '';
    }, 5000);
  }
}
