import { Component, OnInit } from '@angular/core';
import { Spinner } from "../spinner/spinner";
import { CommonModule } from '@angular/common';
import { Reservation, UserReservations } from '../../../Interfaces/Models/reservation';
import { Dashboardservice } from '../../../Services/dashboardservice';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-getreservations',
  imports: [Spinner,CommonModule],
  templateUrl: './getreservations.html',
  styleUrl: './getreservations.css',
})
export class Getreservations implements OnInit {
loading:boolean=false
reservations:Reservation[]=[]
constructor(private http:Dashboardservice,private routing:Router){}
  ngOnInit(): void {
this.getallreservations()
  }
getallreservations(){
this.loading=true

  this.http.getallreservations().subscribe({
    next:(res)=>{
this.reservations=[...new Map(res.map(u=>[u.userId,u])).values()];
this.loading=false
    },
    error:(err)=>{
      alert("an error occured")
      this.loading=false
    }
  })
}
getuserreservation(userid:string){
this.routing.navigate(['/reservations',userid])
}
}