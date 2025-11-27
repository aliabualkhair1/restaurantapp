import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Spinner } from "../../spinner/spinner";
import { Menuinterface } from "../../../../Interfaces/Models/menuinterface";
import { MenuService } from "../../../../Services/menuservice";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Menustatus } from "../../../../Services/SubComponents/menustatus";

@Component({
  selector: 'app-restoremenu',
  imports: [Spinner, FormsModule, CommonModule],
  templateUrl: './restoremenu.html',
  styleUrl: './restoremenu.css',
})
export class Restoremenu implements OnInit {
  loading: boolean = false;
  menus: Menuinterface[] = [];
  name: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: MenuService, private routing: ActivatedRoute, private router: Router,private menu:Menustatus) {
    this.name = routing.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    if (this.name == null) {
      this.getdeletedmenu();
    } else {
      this.getmenubyname(this.name);
    }
  }

  getdeletedmenu() {
    this.loading = true;
    this.http.getalldeletedmenu().subscribe({
      next: (res) => {
        this.menus = res;
        this.menu.setDeletedMenu(res)
        this.loading = false;
      },
      error: (err) => {
        this.showMessage("حدث خطأ أثناء تحميل البيانات", 'error');
        this.loading = false;
      }
    });
  }

  restoremenu(id: number) {
    this.loading = true;
    this.http.restoremenu(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getdeletedmenu();
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء الاسترجاع', 'error');
        this.loading = false;
      }
    });
  }

  restoremenubyid(id: number) {
    this.restoremenu(id);
  }

  getmenubyname(name: string) {
    this.loading = true;
    this.http.getdeletedmenubyname(name).subscribe({
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

  search(name: string) {
    const trimmedName = name.trim();
    if (trimmedName !== '') {
      this.router.navigate(['restoredeletedmenu', trimmedName]);
      this.getmenubyname(trimmedName);
    } else {
      this.router.navigate(['restore']);
      this.getdeletedmenu();
    }
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000);
  }
}
