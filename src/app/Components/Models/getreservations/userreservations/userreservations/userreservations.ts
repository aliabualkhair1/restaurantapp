import { Component, OnInit } from '@angular/core';
import { Dashboardservice } from '../../../../../Services/dashboardservice';
import { UserReservations } from '../../../../../Interfaces/Models/reservation';
import { ActivatedRoute } from '@angular/router';
import { Spinner } from "../../../spinner/spinner";
import { CommonModule } from '@angular/common';
import { TranslationPipe } from "../../../../../TranslationPipe/translation-pipe";

@Component({
  selector: 'app-userreservations',
  imports: [Spinner, CommonModule, TranslationPipe],
  templateUrl: './userreservations.html',
  styleUrl: './userreservations.css',
})
export class Userreservations implements OnInit{
loading:boolean=false
userreservations:UserReservations[]=[]
userid:any
constructor(private http:Dashboardservice,private routing:ActivatedRoute){
  this.userid=routing.snapshot.paramMap.get('userid')
}
  ngOnInit(): void {
    this.getuserreservations()
  }

getuserreservations(){
  this.loading=true
  this.http.getuserreservations(this.userid).subscribe({
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
