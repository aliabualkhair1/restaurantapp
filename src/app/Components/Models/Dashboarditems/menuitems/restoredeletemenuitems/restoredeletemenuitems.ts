import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Menuitemsservice } from "../../../../../Services/menuitemsservice";
import { Menuiteminterface } from "../../../../../Interfaces/Models/menuiteminterface";
import { Spinner } from "../../../spinner/spinner";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Environment } from "../../../../../Environment/environment";

@Component({
  selector: 'app-restoredeletemenuitems',
  templateUrl: './restoredeletemenuitems.html',
  styleUrls: ['./restoredeletemenuitems.css'],
  standalone: true,
  imports: [Spinner, CommonModule, FormsModule],
})
export class Restoredeletemenuitems implements OnInit {
  environment = Environment.StaticFiles;

  loading = false;
  currentpage = 1;
  totalpages = 1;
  menuName = '';
  itemName = '';
  minPrice?: number;
  maxPrice?: number;
  price?: number;

  menuitems: Menuiteminterface[] = [];

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(
    private menuService: Menuitemsservice,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getdeletedmenuitems();
  }

  getdeletedmenuitems() {
    this.loading = true;
    this.menuService.getalldeletedmenuitems(this.currentpage).subscribe({
      next: (res) => {
        this.menuitems = res.items;
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء جلب البيانات', 'error');
        this.loading = false;
      }
    });
  }

  getDeletedMenuItemsByfiltration(pageNumber: number) {
    this.loading = true;
    this.menuService.getdeletedmenuitemsbyfilteration(
      this.menuName,
      this.itemName,
      pageNumber,
      20,
      this.minPrice,
      this.maxPrice,
      this.price
    ).subscribe({
      next: (res) => {
        this.menuitems = res.items;
        this.currentpage = res.pageNumber;
        this.totalpages = res.totalPages;
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء التصفية', 'error');
        this.loading = false;
      }
    });
  }

  applyFilter() {
    this.currentpage = 1;
    this.getDeletedMenuItemsByfiltration(this.currentpage);
  }

  restoreMenuItem(id: number) {
    this.loading = true;
    this.menuService.restoremenuitems(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        setTimeout(() => {
          this.getdeletedmenuitems();
        }, 1000);
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء الاستعادة', 'error');
        this.loading = false;
      }
    });
  }
resetFilter() {
  this.menuName = '';
  this.itemName = '';
  this.minPrice = undefined;
  this.maxPrice = undefined;
  this.price = undefined;

  this.currentpage = 1;
  this.getdeletedmenuitems();
}

  nextPage() {
    if (this.currentpage < this.totalpages) {
      this.currentpage++;
      this.getDeletedMenuItemsByfiltration(this.currentpage);
    }
  }

  prevPage() {
    if (this.currentpage > 1) {
      this.currentpage--;
      this.getDeletedMenuItemsByfiltration(this.currentpage);
    }
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000);
  }
}
