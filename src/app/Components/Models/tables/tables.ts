import { Component, OnInit } from '@angular/core';
import { TableInterface } from '../../../Interfaces/Models/tables';
import { Tablesservices } from '../../../Services/tablesservices';
import { Spinner } from "../spinner/spinner";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Environment } from '../../../Environment/environment';
import { Roles } from '../../../Services/roles';
import { Tablesstatus } from '../../../Services/SubComponents/tablesstatus';
import { TranslationPipe } from "../../../TranslationPipe/translation-pipe";

@Component({
  selector: 'app-tables',
  imports: [Spinner, CommonModule, FormsModule, TranslationPipe],
  templateUrl: './tables.html',
  styleUrl: './tables.css',
})
export class Tables implements OnInit {
  environment = Environment.StaticFiles;
  loading: boolean = false;
  table: TableInterface[] = [];
  deletedtables: TableInterface[] = [];
  tablenumber: any;
  currentpage: number = 1;
  totalpages: number = 1;

  isAdmin = false;
  isAdminAssistant = false;
  isStaff = false;
  isCustomer = false;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Tablesservices, private router: Router, private routing: ActivatedRoute, private auth: Roles,private tablestatus:Tablesstatus) {}

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin();
    this.isAdminAssistant = this.auth.isAdminAssistant();
    this.isStaff = this.auth.isStaff();
    this.isCustomer = this.auth.isCustomer();
    this.tablestatus.deletedtables$.subscribe(data=>{
    this.deletedtables=data
    })
    this.http.getalldeletedtables().subscribe(res=>{
      this.tablestatus.setDeletedTables(res)
    })
    this.routing.params.subscribe(params => {
      this.tablenumber = params['tablenumber'];
      if (this.tablenumber) {
        this.searchbyname(this.tablenumber);
      } else {
        this.getalltables();
      }
    });
  }

  getalltables() {
    this.loading = true;
    this.http.getalltables(this.currentpage).subscribe({
      next: (res) => {
        this.table = res.items;
        this.currentpage = res.pageNumber;
        this.totalpages = res.totalPages;
        this.loading = false;
      },
      error: (err) => {
        this.table = [];
        this.showMessage(err.error || 'Error fetching tables', 'error');
        this.loading = false;
      }
    });
  }

  searchbyname(name: string) {
    this.http.getbytablenumber(name).subscribe({
      next: (res) => {
        this.table = res;
      },
      error: (err) => {
        this.table = [];
        this.showMessage(err.error || 'Table not found', 'error');
      }
    });
  }

  search(tablenumber: string) {
    const tablenumbertrim = tablenumber.trim();
    if (tablenumbertrim !== '') {
      this.router.navigate(['gettable', tablenumbertrim]);
      this.searchbyname(tablenumbertrim);
    } else {
      this.router.navigate(['gettable']);
      this.getalltables();
    }
  }

  deletetable(id: number) {
    this.http.deletetable(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getalltables();
      this.http.getalldeletedtables().subscribe(res=>{
      this.tablestatus.setDeletedTables(res)
    })
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
      }
    });
  }

  updatetable(id: number) {
    this.router.navigate(['updatetables', id]);
  }

  addtable() {
    this.router.navigate(['addtable']);
  }

  restoretables() {
    this.router.navigate(['restoretables']);
  }

  nextPage() {
    if (this.currentpage < this.totalpages) {
      this.currentpage++;
      this.getalltables();
    }
  }

  prevPage() {
    if (this.currentpage > 1) {
      this.currentpage--;
      this.getalltables();
    }
  }

  booktable(id: number) {
    this.router.navigate(['addreservation', id]);
  }

  login() {
    this.router.navigate(['login']);
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
