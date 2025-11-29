import { Component, OnInit } from "@angular/core"
import { Dashboardservice } from "../../../../../../Services/dashboardservice"
import { ActivatedRoute } from "@angular/router"
import { Spinner } from "../../../../spinner/spinner";
import { CommonModule } from "@angular/common";
import {UserReservations } from "../../../../../../Interfaces/Models/reservation";
import { TranslationPipe } from "../../../../../../TranslationPipe/translation-pipe";
@Component({
  selector: 'app-userreservationspaid',
  imports: [Spinner, CommonModule, TranslationPipe],
  templateUrl: './userreservationspaid.html',
  styleUrl: './userreservationspaid.css',
})
export class Userreservationspaid implements OnInit{
loading:boolean=false
userreservations:UserReservations[]=[]
userid:any
constructor(private http:Dashboardservice,private routing:ActivatedRoute){
  this.userid=routing.snapshot.paramMap.get('userid')
}
  ngOnInit(): void {
    this.getuserreservationspaid()
  }
getuserreservationspaid(){
  this.loading=true
  this.http.getuserreservationsspaid(this.userid).subscribe({
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

