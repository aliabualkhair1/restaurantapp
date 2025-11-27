import { Component, OnInit } from '@angular/core';
import { Menuitemsservice } from '../../../../../Services/menuitemsservice';
import { Menuiteminterface } from '../../../../../Interfaces/Models/menuiteminterface';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from "../../../spinner/spinner";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Environment } from '../../../../../Environment/environment';
import { Menuitemsstatus } from '../../../../../Services/SubComponents/menuitemsstatus';

@Component({
  selector: 'app-getunavailablemenuitems',
  imports: [Spinner, CommonModule, FormsModule],
  templateUrl: './getunavailablemenuitems.html',
  styleUrl: './getunavailablemenuitems.css',
})
export class Getunavailablemenuitems implements OnInit {
  environment = Environment.StaticFiles;
  loading: boolean = false;
  currentpage: number = 1;
  totalpages: number = 1;
  menuitems: Menuiteminterface[] = [];
  menuName: string = '';
  itemName: string = '';

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(
    private http: Menuitemsservice,
    private routing: Router,
    private router: ActivatedRoute,
    private menuitem:Menuitemsstatus
  ) {}

  ngOnInit(): void {
    this.getunavailablemenuitems(this.currentpage);
  }

  getunavailablemenuitems(pagenumber: number) {
    this.loading = true;
    this.http.getunavailablemenuitems(pagenumber).subscribe({
      next: (res) => {
        this.menuitems = res.items;
        this.menuitem.setUnAvailableMenuItems(res.items)
        this.currentpage = res.pageNumber;
        this.totalpages = res.totalPages;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ أثناء تحميل البيانات', 'error');
      },
    });
  }

  applyFilter() {
    this.loading = true;
    this.http
      .getunavailablemenuitemsbyfilteration(
        this.menuName,
        this.itemName,
        this.currentpage,
        12
      )
      .subscribe({
        next: (res) => {
          this.menuitems = res.items;
          this.currentpage = res.pageNumber;
          this.totalpages = res.totalPages;
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.showMessage(err.error || 'حدث خطأ أثناء التصفية', 'error');
        },
      });
  }

  resetFilter() {
    this.menuName = '';
    this.itemName = '';
    this.getunavailablemenuitems(this.currentpage);
  }

  nextpage() {
    if (this.currentpage < this.totalpages) {
      this.currentpage++;
      this.getunavailablemenuitems(this.currentpage);
    }
  }

  prevpage() {
    if (this.currentpage > 1) {
      this.currentpage--;
      this.getunavailablemenuitems(this.currentpage);
    }
  }

  getmenuitemsavailable(id: number) {
    this.routing.navigate(['available', id]);
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000);
  }

}
