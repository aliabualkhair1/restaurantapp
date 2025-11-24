export interface Reservation {
    userId:string,
    username:string
}
export interface UserReservations{
    reservationId:number,
    status:string,
    tableNumber:string,
    tableLocation:string,
    numberOfGuests: number,
    dateOfReservation:Date,
    startDate:any,
    endDate:any
    isPaid:boolean
    endDateTime?: Date;

}
export interface _AddReservation{
    tableId:number,
    numberOfGuests: number,
    dateOfReservation:Date,
    startDate:any,
    endDate:any
    
}
export interface _UpdateReservation{
    numberOfGuests: number,
    dateOfReservation:Date,
    startDate:any,
    endDate:any
    
}

