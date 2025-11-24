 import { Component, OnInit } from "@angular/core"
  import { UserReservations } from "../../../../../../Interfaces/Models/reservation"
  import { Dashboardservice } from "../../../../../../Services/dashboardservice"
  import { ActivatedRoute } from "@angular/router"
  import { Spinner } from "../../../../spinner/spinner"
  import { CommonModule } from "@angular/common"
import { ApiResponse } from "../../../../../../Interfaces/Models/menuiteminterface"
import { Order } from "../../../../../../Interfaces/Models/order"
  @Component({
    selector: 'app-userorderscancelled',
    imports: [CommonModule, Spinner],
    templateUrl: './userorderscancelled.html',
    styleUrl: './userorderscancelled.css',
  })
export class Userorderscancelled implements OnInit{
loading:boolean=false
userorders:Order[]=[]
userid:any
constructor(private http:Dashboardservice,private routing:ActivatedRoute){
  this.userid=routing.snapshot.paramMap.get('userid')
}
  ngOnInit(): void {
    this.getuserorderscancelled()
  }
getuserorderscancelled(){
  this.loading=true
  this.http.getuserorderscancelled(this.userid).subscribe({
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

