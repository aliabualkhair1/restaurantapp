import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { Register, RegisterResponse } from '../Interfaces/Authentication/register';
import { Login, LoginResponse } from '../Interfaces/Authentication/login';
import { Observable } from 'rxjs';
import { RefreshToken, RefreshTokenResponse } from '../Interfaces/Authentication/refresh-token';
import { checkuser, ForgetPassword } from '../Interfaces/Models/userdetails';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  constructor(private http:HttpClient){
  }
  Register(register:Register):Observable<string>{
    return this.http.post<string>(Environment.BaseURL+'Authentication/Register',register,{responseType:'text' as 'json'})
  }
  LogIn(login:Login):Observable<LoginResponse>{
   return this.http.post<LoginResponse>(Environment.BaseURL+'Authentication/LogIn',login)
  }
  LogOut():Observable<string>{
    return this.http.post<string>(Environment.BaseURL+'Authentication/LogOut',null)
  }
  RefreshToken(refreshtoken:RefreshToken):Observable<RefreshTokenResponse>{
  return this.http.post<RefreshTokenResponse>(Environment.BaseURL+'Authentication/RefreshToken',refreshtoken)
  }
    checkuser(check:checkuser){
    return this.http.put<string>(Environment.BaseURL+'UserInfo/CheckAccount',check,{responseType:'text' as'json'})
   }
     resetpassword(reset:ForgetPassword){
    return this.http.put<string>(Environment.BaseURL+'UserInfo/ResetPassword',reset,{responseType:'text' as'json'})
   }
}
