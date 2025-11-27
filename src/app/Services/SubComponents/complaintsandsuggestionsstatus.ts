import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { showComplaintsAndSuggestions } from '../../Interfaces/Models/complaintsandsuggestions';

@Injectable({
  providedIn: 'root'
})
export class Complaintsandsuggestionsstatus {
 private deletedComplaintsandsuggestions = new BehaviorSubject<showComplaintsAndSuggestions[]>([]);
   deletedComplaintsandsuggestions$ = this.deletedComplaintsandsuggestions.asObservable();
   setDeletedComplaintsAndSuggestions(res: showComplaintsAndSuggestions[]) {
     this.deletedComplaintsandsuggestions.next(res);
   } 
}
