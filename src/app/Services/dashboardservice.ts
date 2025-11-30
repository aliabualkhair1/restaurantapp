import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { User } from '../Interfaces/Models/user';
import { Role } from '../Interfaces/Models/role';
import { Observable } from 'rxjs';
import { Order } from '../Interfaces/Models/order';
import { ApiResponse, Orderitem } from '../Interfaces/Models/orderitem';
import { Reservation, UserReservations } from '../Interfaces/Models/reservation';
import { ComplaintsAndSuggestions, UserComplaintsAndSuggestions } from '../Interfaces/Models/complaintsandsuggestions';
import { Ordersfeedback } from '../Components/Models/ordersfeedback/ordersfeedback';
import { Userordersfeedback } from '../Components/Models/ordersfeedback/userordersfeedback/userordersfeedback/userordersfeedback';
import { ReservationFeedback, UserReservationFeedback } from '../Interfaces/Models/reservationfeedback';
import { Userreservationsfeedback } from '../Components/Models/reservationsfeedback/userreservationsfeedback/userreservationsfeedback/userreservationsfeedback';
import { _UserOrdersFeedback, OrdersFeedback } from '../Interfaces/Models/ordersfeedback';
import { _GetQuestions } from '../Interfaces/Models/_contactus';
@Injectable({
  providedIn: 'root'
})
export class Dashboardservice {
  constructor(private http:HttpClient){}
    getallusers(){
   return this.http.get<User[]>(Environment.BaseURL+'AdminsDashboard/GetAllUsers')
  }
    getuserbyusername(username:string){
   return this.http.get<User>(Environment.BaseURL+'AdminsDashboard/GetUser?name='+username)
  }
    userrolewithusername(newrole:Role) :Observable<string>{
    return this.http.patch<string>(Environment.BaseURL+'AdminsDashboard/ChangeUserRole',newrole,{responseType:'text' as 'json'})
  }
    GetCustomersQuestions(){
   return this.http.get<_GetQuestions[]>(Environment.BaseURL+'AdminsDashboard/GetAllCustomersQuestions')
  }
  getallorders(){
    return this.http.get<Order[]>(Environment.BaseURL+'AdminsDashboard/GetAllOrders')
  }
  getorderitemsbyorderid(id:number){
  return this.http.get<ApiResponse>(Environment.BaseURL+'Orders/'+id)
  }
  getallordersfeedback(){
   return this.http.get<OrdersFeedback[]>(Environment.BaseURL+'AdminsDashboard/GetAllOrdersFeedback')
 }
 getuserordersfeedback(userid:string){
   return this.http.get<_UserOrdersFeedback[]>(Environment.BaseURL+'AdminsDashboard/GetUserOrdersFeedback?userid='+userid)
 }
  getsystemanalysis(){
    return this.http.get<any>(Environment.BaseURL+'AdminsDashboard/Systemdataanalysis')
  }
  getallreservations(){
    return this.http.get<Reservation[]>(Environment.BaseURL+'AdminsDashboard/GetAllReservations')
  }
  getuserreservations(userid:string){
    return this.http.get<UserReservations[]>(Environment.BaseURL+'AdminsDashboard/GetUserReservations?userid='+userid)
  }
  getallreservationsfeedback(){
   return this.http.get<ReservationFeedback[]>(Environment.BaseURL+'AdminsDashboard/GetAllReservationsFeedback')
 }
 getuserreservationsfeedback(userid:string){
   return this.http.get<UserReservationFeedback[]>(Environment.BaseURL+'AdminsDashboard/GetUserReservationsFeedback?userid='+userid)
 }
  getallcomplaintsandsuggestions(){
        return this.http.get<ComplaintsAndSuggestions[]>(Environment.BaseURL+'AdminsDashboard/GetAllComplaintandSuggestion')
  }
    getusercomplaintsandsuggestions(userid:string){
    return this.http.get<UserComplaintsAndSuggestions[]>(Environment.BaseURL+'AdminsDashboard/GetUserComplaintandSuggestion?userid='+userid)
  }
  getallorderspaid(){
    return this.http.get<Order[]>(Environment.BaseURL+'AdminsDashboard/orderspaid')
  }
   getuserorderspaid(userid:string){
   return this.http.get<Order[]>(Environment.BaseURL+'AdminsDashboard/userorderspaid?userid='+userid)
  }
    getallorderscancelled(){
        return this.http.get<Order[]>(Environment.BaseURL+'AdminsDashboard/orderscancelled')
  }
     getuserorderscancelled(userid:string){
       return this.http.get<Order[]>(Environment.BaseURL+'AdminsDashboard/userorderscancelled?userid='+userid)
  }
    getallreservationsspaid(){
        return this.http.get<Reservation[]>(Environment.BaseURL+'AdminsDashboard/reservationspaid')
  }
    getuserreservationsspaid(userid:string){
        return this.http.get<UserReservations[]>(Environment.BaseURL+'AdminsDashboard/userreservationspaid?userid='+userid)
  }
    getallreservationscancelled(){
            return this.http.get<Reservation[]>(Environment.BaseURL+'AdminsDashboard/reservationscancelled')
  }
     getuserreservationscancelled(userid:string){
        return this.http.get<UserReservations[]>(Environment.BaseURL+'AdminsDashboard/userreservationscancelled?userid='+userid)
  }
}
