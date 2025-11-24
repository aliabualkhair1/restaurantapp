import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { AddOrUpdateMenuItems, ApiResponse, Menuiteminterface, MenuItemsAvailable } from '../Interfaces/Models/menuiteminterface';

@Injectable({
  providedIn: 'root'
})
export class Menuitemsservice {
    constructor(private http:HttpClient){}
  getmenuitems(pageNumber:number){
    const param=new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', 20);  
    return this.http.get<ApiResponse>(Environment.BaseURL+ 'MenuItems/GetMenuItems', { params:param });
  }
  getmenuitemsbyfilteration(menuname?:string,itemname?:string,pagenumber?:number,pagesize?:number,minprice?:number,maxprice?:number,price?:number){
    let params = new HttpParams();
    if (menuname) params = params.set('MenuName', menuname);
    if (itemname) params = params.set('ItemName', itemname);
    if (pagenumber) params = params.set('PageNumber', pagenumber);
    if (pagesize) params = params.set('PageSize', pagesize);
    if (minprice) params = params.set('MinPrice', minprice);
    if (maxprice) params = params.set('MaxPrice', maxprice);
    if (price) params = params.set('Price', price);
    return this.http.get<ApiResponse>(`${Environment.BaseURL}MenuItems/GetMenuItemsByFilteration`,{params})
  }
  getunavailablemenuitems(pageNumber:number){
    const param=new HttpParams()
    .set('PageNumber', pageNumber)
      .set('PageSize', 20);  
      return    this.http.get<ApiResponse>(Environment.BaseURL+'MenuItems/GetUnAvailableMenuItems',{params:param})
    }
    getunavailablemenuitemsbyfilteration(menuname?:string,itemname?:string,pagenumber?:number,pagesize?:number){
    let params = new HttpParams();
    if (menuname) params = params.set('MenuName', menuname);
    if (itemname) params = params.set('ItemName', itemname);
    if (pagenumber) params = params.set('PageNumber', pagenumber);
    if (pagesize) params = params.set('PageSize', pagesize);
    return this.http.get<ApiResponse>(`${Environment.BaseURL}MenuItems/GetUnAvailableMenuItemsByFilteration`,{params})
   }
  
  getalldeletedmenuitems(pageNumber:number){
 const param=new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', 20); 
          return this.http.get<ApiResponse>(Environment.BaseURL+ 'MenuItems/GetDeltedMenuItems', { params:param });

  }
    getdeletedmenuitemsbyfilteration(menuname?:string,itemname?:string,pagenumber?:number,pagesize?:number,minprice?:number,maxprice?:number,price?:number){
    let params = new HttpParams();
    if (menuname) params = params.set('MenuName', menuname);
    if (itemname) params = params.set('ItemName', itemname);
    if (pagenumber) params = params.set('PageNumber', pagenumber);
    if (pagesize) params = params.set('PageSize', pagesize);
    if (minprice) params = params.set('MinPrice', minprice);
    if (maxprice) params = params.set('MaxPrice', maxprice);
    if (price) params = params.set('Price', price);
    return this.http.get<ApiResponse>(`${Environment.BaseURL}MenuItems/GetDeletedMenuItemsByFilteration`,{params})
  }
  addmenuitems(menuitem:any){
    return    this.http.post<string>(Environment.BaseURL+'MenuItems',menuitem,{responseType:'text'as'json'})
  }
  updatemenuitems(id:number,menuitem:any){
   return     this.http.patch<string>(Environment.BaseURL+'MenuItems/'+id,menuitem,{responseType:'text'as'json'})
  }
  availablemenuitems(id:number,available:MenuItemsAvailable){
  return  this.http.put<string>(Environment.BaseURL+'MenuItems/GetMenuItemsAvailable?id='+id,available,{responseType:'text'as'json'})
  }
  deletemenuitems(id:number){
      return  this.http.put<string>(Environment.BaseURL+'MenuItems/SoftDelete?id='+id,id,{responseType:'text'as'json'})
  }
  restoremenuitems(id:number){
      return  this.http.put<string>(Environment.BaseURL+'MenuItems/Restore?id='+id,id,{responseType:'text'as'json'})
  }
}
