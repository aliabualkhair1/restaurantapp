export interface Menuiteminterface {
    id:number,
    MenuId:number,
    menuName:string,
    itemName:string,
    itemImage:string,
    quantity:number,
    price:number,
}
export interface ApiResponse {
    items:Menuiteminterface[]
    pageNumber:number,
    pageSize: number,
    totalRecords: number,
    totalPages: number
}
export interface AddOrUpdateMenuItems {
    MenuId:number,
    ItemName:string,
    ItemImage:string,
    Quantity:number,
    Price:number
}
export interface MenuItemsAvailable {
    quantity:number
}