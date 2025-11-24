import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Loginstatus {
  private observe:BehaviorSubject<boolean>;
  constructor(){
    this.observe=new BehaviorSubject<boolean>(false)
  }
  login():boolean{
    const IsLogged= !!localStorage.getItem('access token')
    this.observe.next(IsLogged);
    return IsLogged
  }
  logout():void{
    localStorage.removeItem('access token')
    localStorage.removeItem('expire date')
    localStorage.removeItem('refresh token')
    this.observe.next(false);
  }
  IsObserve():BehaviorSubject<boolean>{
    return this.observe
  }
}
