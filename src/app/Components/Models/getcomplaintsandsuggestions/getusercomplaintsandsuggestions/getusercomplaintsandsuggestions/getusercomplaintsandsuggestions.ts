import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Spinner } from '../../../spinner/spinner';
import { UserComplaintsAndSuggestions } from '../../../../../Interfaces/Models/complaintsandsuggestions';
import { Dashboardservice } from '../../../../../Services/dashboardservice';
@Component({
  selector: 'app-userreservations',
  imports: [Spinner,CommonModule],
  standalone:true,
  templateUrl: './getusercomplaintsandsuggestions.html',
  styleUrls: ['./getusercomplaintsandsuggestions.css'],
})
export class Getusercomplaintsandsuggestions implements OnInit{
loading:boolean=false
usercomplaintsandsuggestions:UserComplaintsAndSuggestions[]=[]
userid:any
constructor(private http:Dashboardservice,private routing:ActivatedRoute){
  this.userid=routing.snapshot.paramMap.get('userid')
}
  ngOnInit(): void {
this.getusercomplaintsandsuggestions()
  }
getusercomplaintsandsuggestions(){
  this.loading=true
  this.http.getusercomplaintsandsuggestions(this.userid).subscribe({
    next:(res)=>{
 this.usercomplaintsandsuggestions=res
 this.loading=false
    },
    error:(err)=>{
alert("an error occured")
this.loading=false
    }
  })
}
}
