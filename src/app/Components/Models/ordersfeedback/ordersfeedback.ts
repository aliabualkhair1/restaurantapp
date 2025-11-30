import { Component, OnInit } from '@angular/core';
import { Spinner } from "../spinner/spinner";
import { CommonModule } from '@angular/common';
import { Dashboardservice } from '../../../Services/dashboardservice';
import { Router } from '@angular/router';
import { OrdersFeedback } from '../../../Interfaces/Models/ordersfeedback';
@Component({
  selector: 'app-ordersfeedback',
  imports: [Spinner,CommonModule],
  templateUrl: './ordersfeedback.html',
  styleUrl: './ordersfeedback.css',
})
export class Ordersfeedback implements OnInit {
loading:boolean=false
ordersfeedback:OrdersFeedback[]=[]
constructor(private http:Dashboardservice,private routing:Router){}
  ngOnInit(): void {
this.getallordersfeedback()
  }
getallordersfeedback(){
this.loading=true
  this.http.getallordersfeedback().subscribe({
    next:(res)=>{
this.ordersfeedback=[...new Map(res.map(u=>[u.userId,u])).values()];
this.loading=false
    },
    error:(err)=>{
      alert("an error occured")
      this.loading=false
    }
  })
}
getuserorders(userid:string){
this.routing.navigate(['/ordersfeedback',userid])
}
}
