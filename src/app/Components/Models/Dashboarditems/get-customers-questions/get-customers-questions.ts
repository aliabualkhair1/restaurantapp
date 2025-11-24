import { Component, OnInit } from '@angular/core';
import { Spinner } from "../../spinner/spinner";
import { Dashboardservice } from '../../../../Services/dashboardservice';
import { _GetQuestions } from '../../../../Interfaces/Models/_contactus';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-customers-questions',
  imports: [Spinner,CommonModule],
  templateUrl: './get-customers-questions.html',
  styleUrl: './get-customers-questions.css',
})
export class GetCustomersQuestions implements OnInit {
  loading:boolean=false
constructor(private http:Dashboardservice){}
  ngOnInit(): void {
this.getcustomersquestions()
}
getquestions:_GetQuestions[]=[]
getcustomersquestions(){
  this.loading=true
  this.http.GetCustomersQuestions().subscribe({
    next:(res)=>{
this.getquestions=res
this.loading=false
    },
    error:(err)=>{
      alert(err.error)
      this.loading=false
    }
  })
}
}
