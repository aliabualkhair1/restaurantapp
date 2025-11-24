export interface Orderitem {         
id:number
menuId: number; 
menuItemId:number
menuName:string 
 itemName:string
 quantity:number
 price :number
 subTotal :number
 isDeleted:boolean
}
export interface ApiResponse {
orderItems:Orderitem[]
}