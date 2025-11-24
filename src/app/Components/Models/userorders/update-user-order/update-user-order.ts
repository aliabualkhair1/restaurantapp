import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Orderservices } from '../../../../Services/orderservices';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Updateorderitem } from '../../../../Interfaces/Models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user-order',
  imports: [CommonModule,FormsModule],
  templateUrl: './update-user-order.html',
  styleUrl: './update-user-order.css',
})
export class UpdateUserOrder {
  loading:boolean=false
appear:boolean=false
quantity!:number
updateorderitem:Updateorderitem={
  quantity:0
}
@Input() orderid!:number
@Input() orderitemid!:number
@Output() refreshed = new EventEmitter<void>();
constructor(private http:Orderservices,private router:Router){}
newquantity(){
  this.updateorderitem.quantity=this.quantity
}
update(){
  this.newquantity()
  this.loading=true
this.http.updateorder(this.orderid,this.orderitemid,this.updateorderitem).subscribe({
  next:(res)=>{
    alert(res)
this.refreshed.emit()
    this.loading=false
    this.appear=false
  },
  error:(err)=>{
    alert(err.error)
    this.loading=false
  }
})
}
}
