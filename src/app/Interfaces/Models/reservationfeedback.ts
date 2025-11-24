export interface ReservationFeedback {
    userId:string,
    username:string
}
export interface UserReservationFeedback {
    id:number
  reservationId:number
    reservationDate:Date,
    comment:string,
    rating: number,
    submittedOn:Date
}
export interface _AddReservationFeedback {
  reservationId: number,
  comment: string,
  rating:number
}
export interface _UpdateReservationFeedback {
  comment: string,
  rating:number
}