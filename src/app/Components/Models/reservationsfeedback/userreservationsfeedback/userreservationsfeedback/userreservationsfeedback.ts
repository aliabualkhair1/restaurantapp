import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Dashboardservice } from '../../../../../Services/dashboardservice';
import { UserReservationFeedback } from '../../../../../Interfaces/Models/reservationfeedback';
import { Spinner } from '../../../spinner/spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userreservationsfeedback',
  imports: [Spinner,CommonModule],
  templateUrl: './userreservationsfeedback.html',
  styleUrl: './userreservationsfeedback.css',
})

export class Userreservationsfeedback implements OnInit{
  userid:any
  loading:boolean=false
  userreservationsfeedback:UserReservationFeedback[]=[]
 constructor(private http:Dashboardservice,private router:ActivatedRoute){
 this.userid= this.router.snapshot.paramMap.get('userid')
 console.log(this.userid)
 }
  ngOnInit(): void {
  this.getuserreservationsfeedback()
  }
 getuserreservationsfeedback(){
  this.loading=true
  this.http.getuserreservationsfeedback(this.userid).subscribe({
    next:(res)=>{
this.userreservationsfeedback=res
        this.loading=false
    },
    error:(err)=>{
      this.loading=false
      alert("An error occured")
    }
  })
}
}
