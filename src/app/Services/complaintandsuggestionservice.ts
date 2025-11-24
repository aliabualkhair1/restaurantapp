import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { AddOrUpdateComplaintsAndSuggestions,showComplaintsAndSuggestions } from '../Interfaces/Models/complaintsandsuggestions';

@Injectable({
  providedIn: 'root'
})
export class Complaintandsuggestionservice {
  constructor(private http:HttpClient){}
  getcomplaintsandsuggestions(){
    return this.http.get<showComplaintsAndSuggestions[]>(Environment.BaseURL+'ComplaintandSuggestion/GetAllComplaintandSuggestion')
  }
   getdeletedcomplaintsandsuggestions(){
    return this.http.get<showComplaintsAndSuggestions[]>(Environment.BaseURL+'ComplaintandSuggestion/GetAllDeletedComplaintandSuggestion')
  }
  addcomplaintsandsuggestions(cas:AddOrUpdateComplaintsAndSuggestions){
    return this.http.post<string>(Environment.BaseURL+'ComplaintandSuggestion/CreateComplaintandSuggestion',cas,{responseType:'text' as 'json'})
  }
  updatecomplaintsandsuggestions(id:number,cas:AddOrUpdateComplaintsAndSuggestions){
  return this.http.patch<string>(Environment.BaseURL+'ComplaintandSuggestion/UpdateComplaintandSuggestion/'+id,cas,{responseType:'text' as 'json'})
  }
  deletecomplaintsandsuggestions(id:number){
  return this.http.put<string>(Environment.BaseURL+'ComplaintandSuggestion/DeleteComplaintandSuggestion?id='+id,id,{responseType:'text' as 'json'})
  }
  restorecomplaintsandsuggestions(id:number){
  return this.http.put<string>(Environment.BaseURL+'ComplaintandSuggestion/Restore?id='+id,id,{responseType:'text' as 'json'})
  }
}
