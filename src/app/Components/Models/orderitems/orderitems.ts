import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dashboardservice } from '../../../Services/dashboardservice';
import { ApiResponse, Orderitem } from '../../../Interfaces/Models/orderitem';
import { Spinner } from '../spinner/spinner';
import { CommonModule } from '@angular/common';
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
constructor(private http:Dashboardservice,private routing:ActivatedRoute){
this.id=this.routing.snapshot.paramMap.get('id')
}
  ngOnInit(): void {
this.getorderitemsbyorderid()
  }
getorderitemsbyorderid(){
  this.loading=true
  this.http.getorderitemsbyorderid(this.id).subscribe({
    next:(res:ApiResponse)=>{
  this.orderitem=res.orderItems
  this.loading=false
    },
    error:(err)=>{
      alert("an error occured")
      this.loading=false
    }
  })
}
}
