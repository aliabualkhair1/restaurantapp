import { Component, OnInit } from "@angular/core";
import { Spinner } from "../../spinner/spinner";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { MenuService } from "../../../../Services/menuservice";
import { Menuinterface } from "../../../../Interfaces/Models/menuinterface";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-returnunavailablemenu',
  imports: [Spinner, CommonModule, FormsModule],
  templateUrl: './returnunavailablemenu.html',
  styleUrl: './returnunavailablemenu.css',
})
export class Returnunavailablemenu implements OnInit {
  loading: boolean = false;
  menus: Menuinterface[] = [];
  name: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: MenuService, private routing: ActivatedRoute, private router: Router) {
    this.name = routing.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    if (this.name == null) {
      this.getunavailablemenu();
    } else {
      this.getmenubyname(this.name);
    }
  }

  getunavailablemenu() {
    this.loading = true;
    this.http.getunavailablemenu().subscribe({
      next: (res) => {
        this.menus = res;
        this.loading = false;
      },
      error: (err) => {
        this.showMessage("حدث خطأ أثناء تحميل البيانات", 'error');
        this.loading = false;
      }
    });
  }

  getavailablemenu(id: number) {
    this.loading = true;
    this.http.menuavailable(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getunavailablemenu();
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء التفعيل', 'error');
        this.loading = false;
      }
    });
  }

  availablemenubyid(id: number) {
    this.getavailablemenu(id);
  }

  getmenubyname(name: string) {
    this.loading = true;
    this.http.getunavailablemenubyname(name).subscribe({
      next: (res) => {
        this.menus = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 404) {
          this.menus = [];
        } else {
          this.showMessage("حدث خطأ أثناء البحث", 'error');
        }
      }
    });
  }
isMenuFullyUnavailable(menu: Menuinterface): boolean {
  return menu.menuItems?.every(item => !item.isAvailable) ?? true;
}
  search(name: string) {
    const trimmedName = this.name.trim();
    if (trimmedName !== '') {
      this.router.navigate(['availablemenu', trimmedName]);
      this.getmenubyname(trimmedName);
    } else {
      this.router.navigate(['unavailablemenu']);
      this.getunavailablemenu();
    }
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000);
  }
    addmenuitem(id:number){
    this.router.navigate(['menuitems',id])
  }
}
