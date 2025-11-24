import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { _AddReservation, _UpdateReservation, Reservation, UserReservations } from '../Interfaces/Models/reservation';
import { Userreservations } from '../Components/Models/getreservations/userreservations/userreservations/userreservations';
import { _AddReservationFeedback, _UpdateReservationFeedback, UserReservationFeedback } from '../Interfaces/Models/reservationfeedback';
import { Userreservationsfeedback } from '../Components/Models/reservationsfeedback/userreservationsfeedback/userreservationsfeedback/userreservationsfeedback';

@Injectable({
  providedIn: 'root'
})
export class ReserationServices {
   constructor(private http:HttpClient){}
  getallreservations(){
  return  this.http.get<UserReservations[]>(Environment.BaseURL+'Reservation')
  }
  getbyreservationdate(date:Date){
   return     this.http.get<UserReservations[]>(Environment.BaseURL+'Reservation/GetByDate?date='+date)
  }
  getalldeletedreservations(){
    return    this.http.get<UserReservations[]>(Environment.BaseURL+'Reservation/GetAllDeletedReservations')
  }
    getdeletedbyreservationdate(date:Date){
    return    this.http.get<UserReservations[]>(Environment.BaseURL+'Reservation/GetDeletedByDate?date='+date)
  }
  addreservation(reservation:_AddReservation){
    return    this.http.post<string>(Environment.BaseURL+'Reservation',reservation,{responseType:'text'as'json'})
  }
  confirmreservation(id:number){
  return  this.http.put<string>(Environment.BaseURL+'Reservation/ConfirmReservation?id='+id,id,{responseType:'text'as'json'}) 
  }
  updatereservation(id:number,reseration:_UpdateReservation){
   return     this.http.patch<string>(Environment.BaseURL+'Reservation/'+id,reseration,{responseType:'text'as'json'})
  }
  deletereservation(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Reservation/SoftDelete?id='+id,id,{responseType:'text'as'json'})
  }
  restorereservation(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Reservation/Restore?id='+id,id,{responseType:'text'as'json'})
  }


  getallreservationsfeedback(){
  return  this.http.get<UserReservationFeedback[]>(Environment.BaseURL+'Reservation/ReservationFeedBack')
  }
  getbyreservationfeedbackdate(date:Date){
   return     this.http.get<UserReservationFeedback[]>(Environment.BaseURL+'Reservation/GetReservationFeedbackByDate?date='+date)
  }
  getalldeletedreservationsfeedback(){
    return    this.http.get<UserReservationFeedback[]>(Environment.BaseURL+'Reservation/GetDeletedReservationFeedBack')
  }
  getdeletedbyreservationfeedbackdate(date:Date){
 return    this.http.get<UserReservationFeedback[]>(Environment.BaseURL+'Reservation/GetDeletedReservationFeedbackByDate?date='+date)
}
  addreservationfeedback(reservation:_AddReservationFeedback){
    return    this.http.post<string>(Environment.BaseURL+'Reservation/ReservationFeedBack',reservation,{responseType:'text'as'json'})
  }
  updatereservationfeedback(id:number,reseration:_UpdateReservationFeedback){
   return     this.http.patch(Environment.BaseURL+'Reservation/ReservationFeedBack/'+id,reseration,{responseType:'text'})
  }
  deletereservationfeedback(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Reservation/DeleteReservationFeedBack?id='+id,id,{responseType:'text'as'json'})
  }
  restorereservationfeedback(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Reservation/RestoreFeedback?id='+id,id,{responseType:'text'as'json'})
  }
}
