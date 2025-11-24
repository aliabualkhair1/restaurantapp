import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import {  _Userdetails, checkuser, ForgetPassword, ResetPass, RestoreUser, Updatedetails} from '../Interfaces/Models/userdetails';

@Injectable({
  providedIn: 'root'
})
export class Userinfoservice {
 constructor(private http:HttpClient){}
 getuserdetails(){
  return this.http.get<_Userdetails>(Environment.BaseURL+'UserInfo/UserDetails')
 }
 updateuserdetails(userdetails:Updatedetails){
  return this.http.patch<string>(Environment.BaseURL+'UserInfo/UpdateUserDetails',userdetails,{responseType:'text' as'json'})
 }
 resetuserpassword(resetpassword:ResetPass){
 return this.http.put<string>(Environment.BaseURL+'Authentication/RestPassword',resetpassword,{responseType:'text' as'json'})
 }
 deleteuser(){
 return this.http.put<string>(Environment.BaseURL+'UserInfo/SoftDeleteAccount',{},{responseType:'text' as'json'})
 }
  restoreuser(restore:RestoreUser){
  return this.http.put<string>(Environment.BaseURL+'UserInfo/Restore',restore,{responseType:'text' as'json'})
 }
}
