import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Spinner } from '../spinner/spinner';
import { ComplaintsAndSuggestions } from '../../../Interfaces/Models/complaintsandsuggestions';
import { Dashboardservice } from '../../../Services/dashboardservice';

@Component({
  selector: 'app-getcomplaintsandsuggestions',
  standalone:true,
  imports: [Spinner,CommonModule],
  templateUrl: './getcomplaintsandsuggestions.html',
  styleUrls: ['./getcomplaintsandsuggestions.css'],
})
export class Getcomplaintsandsuggestions implements OnInit{
loading:boolean=false
complaintsandsugestions:ComplaintsAndSuggestions[]=[]
constructor(private http:Dashboardservice,private routing:Router){}
  ngOnInit(): void {
this.getallcomplaintsandsuggestions()
  }
getallcomplaintsandsuggestions(){
this.loading=true

  this.http.getallcomplaintsandsuggestions().subscribe({
    next:(res)=>{
this.complaintsandsugestions=[...new Map(res.map(u=>[u.userId,u])).values()];
this.loading=false
    },
    error:(err)=>{
      alert("an error occured")
      this.loading=false
    }
  })
}
getusercomplaintsandsuggestions(userid:string){
this.routing.navigate(['/complaintsandsuggestions',userid])
}
}
