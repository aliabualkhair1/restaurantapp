import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Dashboardservice } from '../../../../../Services/dashboardservice';
import { Spinner } from "../../../spinner/spinner";
import { CommonModule } from '@angular/common';
import { _UserOrdersFeedback } from '../../../../../Interfaces/Models/ordersfeedback';

@Component({
  selector: 'app-userordersfeedback',
  imports: [Spinner,CommonModule],
  templateUrl: './userordersfeedback.html',
  styleUrl: './userordersfeedback.css',
})

export class Userordersfeedback implements OnInit{
  userid:any
  loading:boolean=false
  userordersfeedback:_UserOrdersFeedback[]=[]
 constructor(private http:Dashboardservice,private router:ActivatedRoute){
 this.userid= this.router.snapshot.paramMap.get('userid')
 console.log(this.userid)
 }
 ngOnInit(): void {
  this.getuserordersfeedback()
  }
 getuserordersfeedback(){
  this.loading=true
  this.http.getuserordersfeedback(this.userid).subscribe({
    next:(res)=>{
this.userordersfeedback=res
        this.loading=false
    },
    error:(err)=>{
      this.loading=false
      alert("An error occured")
    }
  })
}
}
