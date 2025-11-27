import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderservices } from '../../../../../Services/orderservices';
import { Orderitem } from '../../../../../Interfaces/Models/orderitem';
import { Spinner } from "../../../spinner/spinner";
import { CommonModule } from '@angular/common';
import { Ordersstatus } from '../../../../../Services/SubComponents/ordersstatus';

@Component({
  selector: 'app-getdeleteuseritems',
  imports: [Spinner, CommonModule],
  templateUrl: './getdeleteuseritems.html',
  styleUrl: './getdeleteuseritems.css',
})
export class Getdeleteuseritems implements OnInit {
  orderitems: Orderitem[] = [];
  loading: boolean = false;
id:any
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Orderservices, private router: Router,private routing:ActivatedRoute,private oi:Ordersstatus) {
    this.id=routing.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
this.getdeletedorderitems()
  }

  getdeletedorderitems() {
    this.http.getdeleteditems(this.id).subscribe({
      next: (res) => {
        this.orderitems = res;
        this.oi.setDeletedOrderItems(res)
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ برجاء المحاولة فى وقت لاحق', 'error');
      }
    });
  }
  restoreitems(itemid: number) {
    this.loading = true;
    this.http.restoreitem(itemid).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getdeletedorderitems();
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
        this.loading = false;
      }
    });
  }

  restore(itemid: number) {
    this.restoreitems(itemid);
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => {
      this.apiMessage = '';
      this.apiMessageType = '';
    }, 5000);
  }
}
