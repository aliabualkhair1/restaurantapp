import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menuinterface } from '../../Interfaces/Models/menuinterface';

@Injectable({
  providedIn: 'root'
})
export class Menustatus {
    private UnAvailableMenu = new BehaviorSubject<Menuinterface[]>([]);
      UnAvailableMenu$ = this.UnAvailableMenu.asObservable();
      setUnAvailableMenu(res:Menuinterface[]) {
        this.UnAvailableMenu.next(res);
      }
      private DeletedMenu = new BehaviorSubject<Menuinterface[]>([]);
      DeletedMenu$ = this.DeletedMenu.asObservable();
      setDeletedMenu(res:Menuinterface[]) {
        this.DeletedMenu.next(res);
      }
}
