import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiResponse, Menuiteminterface } from '../../../Interfaces/Models/menuiteminterface';
import { MenuService } from '../../../Services/menuservice';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from "../spinner/spinner";
import { FormsModule } from '@angular/forms';
import { Cart } from "../../cart/cart";
import { AddOrder } from '../../../Interfaces/Models/order';
import { Environment } from '../../../Environment/environment';
import { Roles } from '../../../Services/roles';

@Component({
  selector: 'app-menuitems',
  imports: [CommonModule, Spinner, FormsModule, Cart],
  templateUrl: './menuitems.html',
  styleUrls: ['./menuitems.css'],
})
export class Menuitems implements OnInit {
  environment = Environment.StaticFiles;
  id: any;
  loading: boolean = false;
  currentpage: number = 1;
  totalpages: number = 1;
  itemName: string = '';
  minPrice?: number;
  maxPrice?: number;
  price?: number;
  orders: AddOrder[] = [];
  menuitems: Menuiteminterface[] = [];
  isauth: boolean = false;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: MenuService, private routing: Router, private router: ActivatedRoute, private auth: Roles) {
    this.id = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isauth = this.auth.isAdmin() || this.auth.isAdminAssistant();
    this.getmenuitems(this.currentpage);
  }

  getmenuitems(pagenumber: number) {
    this.loading = true;
    this.http.getmenuitemsbymenu(this.id, pagenumber, this.itemName, 20, this.minPrice, this.maxPrice, this.price)
      .subscribe({
        next: (res) => {
          this.menuitems = res.items;
          this.currentpage = res.pageNumber;
          this.totalpages = res.totalPages;
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.showMessage(err.error, 'error');
        },
      });
  }

  applyFilters() {
    this.currentpage = 1;
    this.getmenuitems(this.currentpage);
  }

  clearFilters() {
    this.itemName = '';
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.price = undefined;
    this.applyFilters();
  }

  nextpage() {
    if (this.currentpage < this.totalpages) {
      this.currentpage++;
      this.getmenuitems(this.currentpage);
    }
  }

  prevpage() {
    if (this.currentpage > 1) {
      this.currentpage--;
      this.getmenuitems(this.currentpage);
    }
  }

  addmenuitem(id: number) {
    this.routing.navigate(['addmenuitem', id]);
  }

  addtocart(event: AddOrder) {
    if (!event.orderItems || event.orderItems.length === 0) return;
    const newItem = event.orderItems[0];
    this.orders = localStorage.getItem("Orders") ? JSON.parse(localStorage.getItem("Orders")!) : [];
    const existingOrder = this.orders.find(order => order.orderItems.some(i => i.menuItemId === newItem.menuItemId));
    if (existingOrder) {
      const existingItem = existingOrder.orderItems.find(i => i.menuItemId === newItem.menuItemId);
      if (existingItem) existingItem.quantity += newItem.quantity;
      this.showMessage("تم تحديث الكمية فى السلة بنجاح", 'success');
    } else {
      this.orders.push(event);
      this.showMessage("تمت الإضافة للسلة بنجاح", 'success');
    }
    localStorage.setItem("Orders", JSON.stringify(this.orders));
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
