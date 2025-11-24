export interface OrdersFeedback {
    userId:string,
    username:string
}
export interface _UserOrdersFeedback {
  id:number,
  orderId: number,
  orderDate:Date
  comment:string,
  rating: number,
  submittedOn:Date
}
export interface _AddOrderFeedback{
  orderId: number,
  comment: string,
  rating: number
}
export interface _UpdateOrderFeedback{
  comment: string,
  rating: number
}