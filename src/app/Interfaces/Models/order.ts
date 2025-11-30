import { Orderitem } from "./orderitem"

export interface Order {   
  orderId:number     
  userId : string 
  username: string  
  orderDate :Date
  status    :string
  totalPrice:number
  isPaid:boolean
  orderItems:Orderitem[]
  totalPaidOrders:number
}
export interface OrderItems{
   menuItemId: number,
   quantity: number
}
export interface AddOrder{
orderItems:OrderItems[]
}
export interface Updateorderitem{
quantity:number
}
