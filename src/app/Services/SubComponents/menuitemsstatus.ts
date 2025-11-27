import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menuiteminterface } from '../../Interfaces/Models/menuiteminterface';

@Injectable({
  providedIn: 'root'
})
export class Menuitemsstatus {
      private UnAvailableMenuItems = new BehaviorSubject<Menuiteminterface[]>([]);
        UnAvailableMenuItems$ = this.UnAvailableMenuItems.asObservable();
        setUnAvailableMenuItems(res:Menuiteminterface[]) {
          this.UnAvailableMenuItems.next(res);
        }
        private DeletedMenuItems = new BehaviorSubject<Menuiteminterface[]>([]);
        DeletedMenuItems$ = this.DeletedMenuItems.asObservable();
        setDeletedMenuItems(res:Menuiteminterface[]) {
          this.DeletedMenuItems.next(res);
        }
}
