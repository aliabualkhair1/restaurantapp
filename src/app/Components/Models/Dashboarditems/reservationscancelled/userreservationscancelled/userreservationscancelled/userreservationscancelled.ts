import { Component, OnInit } from "@angular/core"
import { UserReservations } from "../../../../../../Interfaces/Models/reservation"
import { Dashboardservice } from "../../../../../../Services/dashboardservice"
import { ActivatedRoute } from "@angular/router"
import { Spinner } from "../../../../spinner/spinner"
import { CommonModule } from "@angular/common"
@Component({
  selector: 'app-userreservationscancelled',
  imports: [Spinner,CommonModule],
  templateUrl: './userreservationscancelled.html',
  styleUrl: './userreservationscancelled.css',
})
export class Userreservationscancelled implements OnInit{
loading:boolean=false
userreservations:UserReservations[]=[]
userid:any
constructor(private http:Dashboardservice,private routing:ActivatedRoute){
  this.userid=routing.snapshot.paramMap.get('userid')
}
  ngOnInit(): void {
    this.getuserreservationscancelled()
  }
getuserreservationscancelled(){
  this.loading=true
  this.http.getuserreservationscancelled(this.userid).subscribe({
    next:(res)=>{
 this.userreservations=res
 this.loading=false
    },
    error:(err)=>{
alert("an error occured")
this.loading=false
    }
  })
}
}

