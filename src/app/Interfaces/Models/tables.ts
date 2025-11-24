export interface TableInterface {
    id: number,
    tableNumber:string,
    capacity: number,
    location: string,
    tableImage: string,
    status: string
}
export interface TableResponse{
items:TableInterface[],
    pageNumber:number,
    pageSize: number,
    totalRecords: number,
    totalPages: number
}
export interface AddOrUpdateTable {
    TableNumber:string,
    Capacity: number,
    Location: string,
    TableImage: File,
}

