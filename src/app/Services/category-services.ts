import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { AddOrUpdateCategory, Categoryinterface } from '../Interfaces/Models/categoryinterface';

@Injectable({
  providedIn: 'root'
})
export class CategoryServices {
  constructor(private http:HttpClient){}
  getallcategories(){
    return this.http.get<Categoryinterface[]>(Environment.BaseURL+'Category')
  }
  getcategorybyname(name:string){
        return this.http.get<Categoryinterface[]>(Environment.BaseURL+'Category/GetByCategoryName?name='+name)
  }
  getdeletedcategorybyname(name:string){
        return this.http.get<Categoryinterface[]>(Environment.BaseURL+'Category/GetDeletedCategoryByName?name='+name)
  }
  addcategory(addcategory:AddOrUpdateCategory){
        return this.http.post<string>(Environment.BaseURL+'Category',addcategory,{responseType:'text' as 'json'})
  }
  updatecategorybyid(id:number,name:AddOrUpdateCategory){
        return this.http.patch<string>(Environment.BaseURL+'Category/'+id,name,{responseType:'text' as 'json'})
  }
    deletecategorybyid(id:number){
        return this.http.put<string>(Environment.BaseURL+'Category/SoftDelete?id='+id,id,{responseType:'text' as 'json'})
  }
    restorecategorybyid(id:number){
        return this.http.put<string>(Environment.BaseURL+'Category/Restore?id='+id,id,{responseType:'text' as 'json'})
  }
  getalldeletedcategories(){
  return this.http.get<Categoryinterface[]>(Environment.BaseURL+'Category/GetAllDeletedCategories')
  }
}
