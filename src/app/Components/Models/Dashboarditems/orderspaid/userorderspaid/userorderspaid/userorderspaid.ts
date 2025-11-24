import { Component, OnInit } from "@angular/core"
import { Dashboardservice } from "../../../../../../Services/dashboardservice"
import { ActivatedRoute } from "@angular/router"
import { Order } from "../../../../../../Interfaces/Models/order"
import { Spinner } from "../../../../spinner/spinner";
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-userorderspaid',
  imports: [Spinner,CommonModule],
  templateUrl: './userorderspaid.html',
  styleUrl: './userorderspaid.css',
})

export class Userorderspaid implements OnInit{
loading:boolean=false
userorders:Order[]=[]
userid:any
constructor(private http:Dashboardservice,private routing:ActivatedRoute){
  this.userid=routing.snapshot.paramMap.get('userid')
}
  ngOnInit(): void {
    this.getuserorderspaid()
  }
getuserorderspaid(){
  this.loading=true
  this.http.getuserorderspaid(this.userid).subscribe({
    next:(res)=>{
 this.userorders=res
 this.loading=false
    },
    error:(err)=>{
alert("an error occured")
this.loading=false
    }
  })
}
}


