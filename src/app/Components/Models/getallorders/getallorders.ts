import { Component, OnInit } from '@angular/core';
import { Dashboardservice } from '../../../Services/dashboardservice';
import { Order } from '../../../Interfaces/Models/order';
import { Spinner } from "../spinner/spinner";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-getallorders',
  imports: [Spinner,CommonModule],
  templateUrl: './getallorders.html',
  styleUrl: './getallorders.css',
})
export class Getallorders implements OnInit {
  orders:Order[]=[]
  loading:boolean=false
  id:any
constructor(private http:Dashboardservice,private routing:Router){}
  ngOnInit(): void {
this.getallorders()
  }
getallorders(){
  this.loading=true
  this.http.getallorders().subscribe({
    next:(res)=>{
this.orders=res
this.loading=false
    },
    error:(err)=>{
      alert("an error occured")
      this.loading=false
    }
  })
}
getorderitemsbyorderid(id:number){
this.routing.navigate(['orderitems/',id])
}
}
