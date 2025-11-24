import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { _Userdetails } from '../../../Interfaces/Models/userdetails';
import { Userinfoservice } from '../../../Services/userinfoservice';
import { Spinner } from "../../Models/spinner/spinner";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [Spinner,CommonModule],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css',
})
export class Userdetails implements OnInit {
loading:boolean=false
userdetails:_Userdetails[]=[]
constructor(private http:Userinfoservice,private router:Router){}
  ngOnInit(): void {
this.getuserdetails()
  }
getuserdetails(){
  this.loading=true
  this.http.getuserdetails().subscribe({
    next:(res)=>{
      this.userdetails=[res]
      this.loading=false
    },
    error:(err)=>{
      alert(err.error.error)
      this.loading=false
    }
  })
}
updateaccount(){
this.router.navigate(['updateuserinfo'])
}
resetpassword(){
this.router.navigate(['resetpassword'])
}
deleteaccount(){
  this.loading=true
  this.http.deleteuser().subscribe({
    next:(res)=>{
      alert(res)
      this.loading=false
      this.router.navigate(['login'])
    },
    error:(err)=>{
      alert(err)
      this.loading=false
    }
  })
}
}
