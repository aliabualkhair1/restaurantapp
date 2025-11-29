import { CommonModule } from "@angular/common"
import { Spinner } from "../../spinner/spinner"
import { Order } from "../../../../Interfaces/Models/order"
import { Dashboardservice } from "../../../../Services/dashboardservice"
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { TranslationPipe } from "../../../../TranslationPipe/translation-pipe";

@Component({
  selector: 'app-orderscancelled',
  imports: [Spinner, CommonModule, TranslationPipe],
  templateUrl: './orderscancelled.html',
  styleUrl: './orderscancelled.css',
})
export class Orderscancelled implements OnInit {
loading:boolean=false
orders:Order[]=[]
constructor(private http:Dashboardservice,private routing:Router){}
  ngOnInit(): void {
this.getallreservationscancelled()
  }
getallreservationscancelled(){
this.loading=true

  this.http.getallorderscancelled().subscribe({
    next:(res)=>{
this.orders=[...new Map(res.map(u=>[u.userId,u])).values()];
this.loading=false
    },
    error:(err)=>{
      alert("an error occured")
      this.loading=false
    }
  })
}
getuserorderscancelled(userid:string){
this.routing.navigate(['/orderscancelled',userid])
}
}
