
import { Component, OnInit } from '@angular/core';
import { Spinner } from "../spinner/spinner";
import { CommonModule } from '@angular/common';
import { Reservation, UserReservations } from '../../../Interfaces/Models/reservation';
import { Dashboardservice } from '../../../Services/dashboardservice';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ReservationFeedback } from '../../../Interfaces/Models/reservationfeedback';
@Component({
  selector: 'app-reservationsfeedback',
  imports: [Spinner,CommonModule],
  templateUrl: './reservationsfeedback.html',
  styleUrl: './reservationsfeedback.css',
})
export class Reservationsfeedback implements OnInit {
loading:boolean=false
reservationfeedback:ReservationFeedback[]=[]
constructor(private http:Dashboardservice,private routing:Router){}
  ngOnInit(): void {
this.getallreservations()
  }
getallreservations(){
this.loading=true

  this.http.getallreservationsfeedback().subscribe({
    next:(res)=>{
this.reservationfeedback=[...new Map(res.map(u=>[u.userId,u])).values()];
this.loading=false
    },
    error:(err)=>{
      alert("an error occured")
      this.loading=false
    }
  })
}
getuserreservationfeedback(userid:string){
this.routing.navigate(['/reservationsfeedback',userid])
}
}
