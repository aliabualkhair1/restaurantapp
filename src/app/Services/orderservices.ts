import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { UpdateOrderFeedback } from '../Components/Models/userordersfeedback/updateorderfeedback/updateorderfeedback';
import { _AddOrderFeedback, _UpdateOrderFeedback, _UserOrdersFeedback } from '../Interfaces/Models/ordersfeedback';
import { UserOrdersFeedback } from '../Components/Models/userordersfeedback/userordersfeedback';
import { AddOrder, Order, OrderItems, Updateorderitem } from '../Interfaces/Models/order';
import { ApiResponse, Orderitem } from '../Interfaces/Models/orderitem';

@Injectable({
  providedIn: 'root'
})
export class Orderservices {
     constructor(private http:HttpClient){}
  getallorders(){
  return  this.http.get<Order[]>(Environment.BaseURL+'Orders')
  }
  getorderitemsbyorderid(id:number){
    return this.http.get<Order[]>(Environment.BaseURL+'Orders/'+id)
    }
  getbyorderdate(date:Date){
   return     this.http.get<Order[]>(Environment.BaseURL+'Orders/GetOrderByDate?date='+date)
  }
  getalldeletedorders(){
    return    this.http.get<Order[]>(Environment.BaseURL+'Orders/GetDeletedOrders')
  }
    getdeletedbyorderdate(date:Date){
    return    this.http.get<Order[]>(Environment.BaseURL+'Orders/GetDeletedOrderByDate?date='+date)
  }
  addorder(order:AddOrder){
    return    this.http.post<string>(Environment.BaseURL+'Orders',order,{responseType:'text'as'json'})
  }
  confirmorder(id:number){
  return  this.http.put<string>(Environment.BaseURL+'Orders/ConfirmOrder?id='+id,id,{responseType:'text'as'json'}) 
  }
  updateorder(orderid: number, orderitemid: number, orderitem: Updateorderitem) {
  return this.http.patch(
    `${Environment.BaseURL}Orders/${orderid}/orderitem/${orderitemid}`,
    orderitem,
    {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text'
    }
  );
}
deleteitem(itemid:number){
return this.http.put<string>(Environment.BaseURL+'Orders/ItemSoftDelete?itemid='+itemid,itemid,{responseType:'text' as 'json'})
}
getdeleteditems(id:number){
return this.http.get<Orderitem[]>(Environment.BaseURL+'Orders/GetDeletedItemsByOrderId?orderid='+id)
}
restoreitem(itemid:number){
return this.http.put<string>(Environment.BaseURL+'Orders/RestoreItem?itemid='+itemid,itemid,{responseType:'text' as 'json'})
}
  deleteorder(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Orders/SoftDelete?id='+id,id,{responseType:'text'as'json'})
  }
  restoreorder(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Orders/Restore?id='+id,id,{responseType:'text'as'json'})
  }
  getallordersfeedback(){
  return  this.http.get<_UserOrdersFeedback[]>(Environment.BaseURL+'Orders/OrderFeedBack')
  }
  getbyorderfeedbackdate(date:Date){
   return     this.http.get<_UserOrdersFeedback[]>(Environment.BaseURL+'Orders/GetOrderFeedbackByDate?date='+date)
  }
  getalldeletedordersfeedback(){
    return    this.http.get<_UserOrdersFeedback[]>(Environment.BaseURL+'Orders/DeletedOrdersFeedBack')
  }
  getdeletedbyorderfeedbackdate(date:Date){
 return    this.http.get<_UserOrdersFeedback[]>(Environment.BaseURL+'Orders/GetDeletedOrderFeedbackByDate?date='+date)
}
  addorderfeedback(order:_AddOrderFeedback){
    return    this.http.post<string>(Environment.BaseURL+'Orders/OrderFeedBack',order,{responseType:'text'as'json'})
  }
  updateorderfeedback(id:number,order:_UpdateOrderFeedback){
   return     this.http.patch(Environment.BaseURL+'Orders/OrderFeedBack/'+id,order,{responseType:'text'})
  }
  deleteorderfeedback(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Orders/DeleteOrderFeedBack?id='+id,id,{responseType:'text'as'json'})
  }
  restoreorderfeedback(id:number){
      return  this.http.put<string>(Environment.BaseURL+'Orders/RestoreFeedback?id='+id,id,{responseType:'text'as'json'})
  }
}
