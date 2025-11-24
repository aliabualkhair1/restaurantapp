import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { _Contactus } from '../Interfaces/Models/_contactus';

@Injectable({
  providedIn: 'root'
})
export class Contact {
  constructor(private http:HttpClient){}
  contactus(contact:_Contactus){
  return  this.http.post<string>(Environment.BaseURL+'ContactUs/ContactUs',contact,{responseType:'text' as 'json'})
  }
}
