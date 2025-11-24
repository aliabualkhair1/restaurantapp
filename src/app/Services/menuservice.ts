import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { Categoryinterface } from '../Interfaces/Models/categoryinterface';
import { ApiResponse, Menuiteminterface } from '../Interfaces/Models/menuiteminterface';
import { AddMenu, Menuinterface, MenuResponse, UpdateMenu } from '../Interfaces/Models/menuinterface';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http:HttpClient){

  }
  getallmenu(pageNumber:number){
    const param=new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', 20); 
    return this.http.get<MenuResponse>(Environment.BaseURL+'Menu',{params:param})
  }
  getallcategories(){
        return this.http.get<Categoryinterface[]>(Environment.BaseURL+'Category')
  }
   getmenubycategory(value:string){
        return this.http.get<MenuResponse>(Environment.BaseURL+'Menu?categoryname='+value)
  }
getmenuitemsbymenu(
  id: number,
  pageNumber: number,
  itemname?: string,
  pagesize?: number,
  minprice?: number,
  maxprice?: number,
  price?: number
) {
  let params = new HttpParams()
    .set('PageNumber', pageNumber)
    .set('PageSize', (pagesize ?? 20).toString());

  if (itemname) params = params.set('ItemName', itemname);
  if (minprice !== undefined && minprice !== null) params = params.set('MinPrice', minprice.toString());
  if (maxprice !== undefined && maxprice !== null) params = params.set('MaxPrice', maxprice.toString());
  if (price !== undefined && price !== null) params = params.set('Price', price.toString());

  return this.http.get<ApiResponse>(
    Environment.BaseURL + 'MenuItems/getbyid/' + id,
    { params }
  );
}


getmenubyname(name:string){
  return this.http.get<Menuinterface[]>(Environment.BaseURL+'Menu/GetMenuByName?name='+name)
}
getdeletedmenubyname(name:string){
  return this.http.get<Menuinterface[]>(Environment.BaseURL+'Menu/GetDeletedMenuName?name='+name)
}
getunavailablemenubyname(name:string){
  return this.http.get<Menuinterface[]>(Environment.BaseURL+'Menu/GetUnAvailableMenuName?name='+name)
}
addmenu(addmenu:AddMenu){
  return this.http.post<string>(Environment.BaseURL+'Menu',addmenu,{responseType:'text' as 'json'})
}
updatemenu(addmenu:UpdateMenu,id:number){
  return this.http.patch<string>(Environment.BaseURL+'Menu/'+id,addmenu,{responseType:'text' as 'json'})
}
deletemenu(id:number){
  return this.http.put<string>(Environment.BaseURL+'Menu/SoftDelete?id='+id,id,{responseType:'text' as 'json'})
}
getalldeletedmenu(){
  return this.http.get<Menuinterface[]>(Environment.BaseURL+'Menu/GetDeletedMenu')
}
getunavailablemenu(){
return this.http.get<Menuinterface[]>(Environment.BaseURL+'Menu/GetUnAvailableMenu') 
}
menuavailable(id:number){
return this.http.put<string>(Environment.BaseURL+'Menu/Available?id='+id,id,{responseType:'text' as 'json'})
}
restoremenu(id:number){
  return this.http.put<string>(Environment.BaseURL+'Menu/Restore?id='+id,id,{responseType:'text' as 'json'})
}
}