import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categoryinterface } from '../../Interfaces/Models/categoryinterface';

@Injectable({
  providedIn: 'root'
})
export class Categorystatus {
   private deletedCategories = new BehaviorSubject<Categoryinterface[]>([]);
     deletedCategories$ = this.deletedCategories.asObservable();
     setDeletedCategories(res: Categoryinterface[]) {
       this.deletedCategories.next(res);
     } 
}
