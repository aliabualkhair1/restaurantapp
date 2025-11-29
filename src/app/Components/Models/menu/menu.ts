import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../Services/menuservice';
import { CommonModule } from '@angular/common';
import { Menuinterface } from '../../../Interfaces/Models/menuinterface';
import { Categoryinterface } from '../../../Interfaces/Models/categoryinterface';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from "../spinner/spinner";
import { Roles } from '../../../Services/roles';
import { Menustatus } from '../../../Services/SubComponents/menustatus';
import { Menuiteminterface } from '../../../Interfaces/Models/menuiteminterface';
import { Menuitemsstatus } from '../../../Services/SubComponents/menuitemsstatus';
import { TranslationPipe } from "../../../TranslationPipe/translation-pipe";

@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule, Spinner, TranslationPipe],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu implements OnInit {
  menu: Menuinterface[] = [];
  category: Categoryinterface[] = [];
  filterd = this.menu;
  loading: boolean = false;
  name: any;
  currentpage: number = 1;
  totalpages: number = 1;
deletedmenus:Menuinterface[]=[]
unavailablemenus:Menuinterface[]=[]
  isAdmin = false;
  isAdminAssistant = false;
  isStaff = false;
  isCustomer = false;
  unavailablemenuitems:Menuiteminterface[]=[]
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';
  constructor(private http: MenuService, private router: Router, private routing: ActivatedRoute, private auth: Roles,private menus:Menustatus) {
    this.name = routing.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.loading = true;
    this.isAdmin = this.auth.isAdmin();
    this.isAdminAssistant = this.auth.isAdminAssistant();
    this.isStaff = this.auth.isStaff();
    this.isCustomer = this.auth.isCustomer();
 this.menus.UnAvailableMenu$.subscribe(data=>{
  this.unavailablemenus=data
})  
this.menus.DeletedMenu$.subscribe(data=>{
this.deletedmenus=data
 })  
    this.http.getunavailablemenu().subscribe(res => {
    this.menus.setUnAvailableMenu(res);
  });
    this.http.getalldeletedmenu().subscribe(res => {
    this.menus.setDeletedMenu(res);
  });
  
      if (this.name == null) {
        this.getmenu();
      } else {
        this.getmenubyname(this.name);
      }
    this.getcategory();
  }

  getmenu() {
    this.loading = true;
    this.http.getallmenu(this.currentpage).subscribe({
      next: (res) => {
        this.menu = res.items;
        this.filterd = res.items;
        this.currentpage = res.pageNumber;
        this.totalpages = res.totalPages;
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
        this.showMessage(err.error?.error || "An error occurred", 'error');
      }
    });
  }

  getmenubyname(name: string) {
    this.loading = true;
    this.http.getmenubyname(name).subscribe({
      next: (res) => {
        this.filterd = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 404) {
          this.menu = [];
        } else {
          this.showMessage(err.error?.error || "An error occurred", 'error');
        }
      }
    });
  }

  search(name: string) {
    const trimmedName = this.name.trim();
    if (trimmedName !== '') {
      this.router.navigate(['menu', trimmedName]);
      this.getmenubyname(trimmedName);
    } else {
      this.router.navigate(['menu']);
      this.getmenu();
    }
  }

  getcategory() {
    this.http.getallcategories().subscribe({
      next: (res: Categoryinterface[]) => {
        this.category = res;
      },
      error: () => {
        this.category = [];
      }
    });
  }

  getmenubycategory(event: any) {
    this.loading = true;
    let value = event.target.value;
    if (value === "all") {
      this.filterd = this.menu;
      this.loading = false;
    } else {
      this.menufiltration(value);
    }
  }

  menufiltration(value: string) {
    this.loading = true;
    this.http.getmenubycategory(value).subscribe({
      next: (res) => {
        this.filterd = res.items;
        this.loading = false;
      },
      error: () => {
        this.showMessage("An error occurred", 'error');
      }
    });
  }

  getmenuitemsbymenuid(menuid: number) {
    this.router.navigate(['menuitems', menuid]);
  }

  updatemenubymenuid(id: number) {
    this.router.navigate(['updatemenu', id]);
  }

  deletemenubymenuid(id: number) {
    this.deletemenu(id);
  }

  restoremenu() {
    this.router.navigate(['restore']);
  }

  unavailablemenu() {
    this.router.navigate(['unavailablemenu']);
  }
  deletemenu(menuid: number) {
    this.http.deletemenu(menuid).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getmenu();
        this.http.getalldeletedmenu().subscribe(deleted => {
        this.menus.setDeletedMenu(deleted);
      });
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ', 'error');
      }
    });
  }

  nextPage() {
    if (this.currentpage < this.totalpages) {
      this.currentpage++;
      this.getmenu();
    }
  }

  prevPage() {
    if (this.currentpage > 1) {
      this.currentpage--;
      this.getmenu();
    }
  }

  addmenu() {
    this.router.navigate(['addmenu']);
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
