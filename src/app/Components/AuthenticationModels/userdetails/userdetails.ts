import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { _Userdetails } from '../../../Interfaces/Models/userdetails';
import { Userinfoservice } from '../../../Services/userinfoservice';
import { Spinner } from "../../Models/spinner/spinner";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Roles } from '../../../Services/roles';
@Component({
  selector: 'app-userdetails',
  imports: [Spinner, CommonModule],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css',
})
export class Userdetails implements OnInit {
loading:boolean=false
userdetails:_Userdetails[]=[]
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

constructor(private http:Userinfoservice,private router:Router,private roles:Roles){}
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
      this.loading=false
      this.apiMessage=res
      this.apiMessageType = 'success';
       localStorage.removeItem('access token');
        localStorage.removeItem('refresh token');
        localStorage.removeItem('expire date');
        this.roles.setAuthStatus(false);        
        setTimeout(() => {
        this.apiMessage ='';
        this.router.navigate(['home'])
        }, 2000);
    },
    error:(err)=>{
this.apiMessageType = 'error';
      this.loading=false
    }
  })
}
}
