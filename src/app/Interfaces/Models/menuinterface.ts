export interface Menuinterface {
    id:number,
    name:string,
    categoryId:number,
    categoryName:string,
    description:string,
    isAvailable:boolean,
    menuItems:_MenuItemsinterface[]
}
export interface _MenuItemsinterface {
    id:number,
    menuId:number,
    menuName:string,
    itemName:string,
    itemImage:string,
    quantity:number,
    price:number,
    isAvailable:boolean,

}
export interface MenuResponse{
items:Menuinterface[],
    pageNumber:number,
    pageSize: number,
    totalRecords: number,
    totalPages: number
}
export interface AddMenu{
    categoryId:number,
    menuName:string
    description:string,
}
export interface UpdateMenu{
    categoryId:number,
    menuName:string
    description:string,
    isAvailable:boolean
}
export interface checkid{
id:number
}


