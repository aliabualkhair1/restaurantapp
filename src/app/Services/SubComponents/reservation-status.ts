import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserReservations } from '../../Interfaces/Models/reservation';
import { UserReservationFeedback } from '../../Interfaces/Models/reservationfeedback';

@Injectable({
  providedIn: 'root'
})
export class ReservationStatus {
private deletedReservations = new BehaviorSubject<UserReservations[]>([]);
  deletedReservations$ = this.deletedReservations.asObservable();
  setDeletedReservations(res: UserReservations[]) {
    this.deletedReservations.next(res);
  }
  private DeletedReservationsFeedbacks = new BehaviorSubject<UserReservationFeedback[]>([]);
  DeletedReservationsFeedbacks$ = this.DeletedReservationsFeedbacks.asObservable();
  setDeletedReservationsFeedbacks(res: UserReservationFeedback[]) {
    this.DeletedReservationsFeedbacks.next(res);
  }
}
