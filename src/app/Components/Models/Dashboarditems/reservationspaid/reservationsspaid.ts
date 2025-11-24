import { CommonModule } from "@angular/common"
import { Spinner } from "../../spinner/spinner"
import { Reservation } from "../../../../Interfaces/Models/reservation"
import { Dashboardservice } from "../../../../Services/dashboardservice"
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: 'app-reservationsspaid',
  imports: [Spinner,CommonModule],
  templateUrl: './reservationsspaid.html',
  styleUrl: './reservationsspaid.css',
})
export class Reservationsspaid implements OnInit {
loading:boolean=false
reservations:Reservation[]=[]
constructor(private http:Dashboardservice,private routing:Router){}
  ngOnInit(): void {
this.getallreservationspaid()
  }
getallreservationspaid(){
this.loading=true

  this.http.getallreservationsspaid().subscribe({
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
this.routing.navigate(['/reservationspaid',userid])
}
}
