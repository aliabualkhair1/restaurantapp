import { CommonModule } from "@angular/common"
import { Reservation } from "../../../../Interfaces/Models/reservation"
import { Dashboardservice } from "../../../../Services/dashboardservice"
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Spinner } from "../../spinner/spinner"
@Component({
  selector: 'app-reservationscancelled',
  imports: [Spinner,CommonModule],
  templateUrl: './reservationscancelled.html',
  styleUrl: './reservationscancelled.css',
})
export class Reservationscancelled implements OnInit {
loading:boolean=false
reservations:Reservation[]=[]
constructor(private http:Dashboardservice,private routing:Router){}
  ngOnInit(): void {
this.getallreservationscancelled()
  }
getallreservationscancelled(){
this.loading=true

  this.http.getallreservationscancelled().subscribe({
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
getuserreservationscancelled(userid:string){
this.routing.navigate(['/reservationscancelled',userid])
}
}
