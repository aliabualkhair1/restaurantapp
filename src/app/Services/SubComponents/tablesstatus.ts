import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableInterface } from '../../Interfaces/Models/tables';

@Injectable({
  providedIn: 'root'
})
export class Tablesstatus {
   private deletedtables = new BehaviorSubject<TableInterface[]>([]);
     deletedtables$ = this.deletedtables.asObservable();
     setDeletedTables(res:TableInterface[]) {
       this.deletedtables.next(res);
     } 
}
