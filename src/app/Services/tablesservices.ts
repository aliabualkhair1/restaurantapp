import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { AddOrUpdateTable, TableInterface, TableResponse } from '../Interfaces/Models/tables';
@Injectable({
  providedIn: 'root'
})
export class Tablesservices {
  constructor(private http:HttpClient){}
  getalltables(pageNumber:number){
      const param=new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', 20); 
  return  this.http.get<TableResponse>(Environment.BaseURL+'Tables',{params:param})
  }
  getbytablenumber(tablenumber:string){
   return     this.http.get<TableInterface[]>(Environment.BaseURL+'Tables/GetTableByTableNumber?TableNumber='+tablenumber)
  }
  getalldeletedtables(){
    return    this.http.get<TableInterface[]>(Environment.BaseURL+'Tables/GetAllDeletedTable')
  }
    getdeletedbytablenumber(tablenumber:string){
    return    this.http.get<TableInterface[]>(Environment.BaseURL+'Tables/GetDeletedTableByTableNumber?TableNumber='+tablenumber)
  }
  addtable(table:any){
    return    this.http.post<string>(Environment.BaseURL+'Tables',table,{responseType:'text'as'json'})
  }
  updatetable(id:number,table:any){
   return     this.http.patch<string>(Environment.BaseURL+'Tables/'+id,table,{responseType:'text'as'json'})
  }
  deletetable(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Tables/SoftDelete?id='+id,id,{responseType:'text'as'json'})
  }
  restoretable(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Tables/Restore?id='+id,id,{responseType:'text'as'json'})
  }
}
