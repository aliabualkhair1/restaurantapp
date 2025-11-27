import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Tablesservices } from "../../../../Services/tablesservices";
import { TableInterface } from "../../../../Interfaces/Models/tables";
import { Spinner } from "../../spinner/spinner";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Environment } from "../../../../Environment/environment";
import { Tablesstatus } from "../../../../Services/SubComponents/tablesstatus";

@Component({
  selector: 'app-restoredeletedtables',
  imports: [Spinner, CommonModule, FormsModule],
  templateUrl: './restoredeletedtables.html',
  styleUrl: './restoredeletedtables.css',
})
export class Restoredeletedtables implements OnInit {
  environment = Environment.StaticFiles;
  loading: boolean = false;
  tables: TableInterface[] = [];
  tablenumber: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Tablesservices, private router: Router, private routing: ActivatedRoute,private tablesstatus:Tablesstatus) {}

  ngOnInit(): void {
    this.routing.params.subscribe(params => {
      this.tablenumber = params['tablenumber'];
      if (this.tablenumber) {
        this.searchbyname(this.tablenumber);
      } else {
        this.tablenumber = '';
        this.getalldeletedtables();
      }
    });
  }

  getalldeletedtables() {
    this.loading = true;
    this.http.getalldeletedtables().subscribe({
      next: (res) => {
        this.tables = res;
        this.tablesstatus.setDeletedTables(res)
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
        this.loading = false;
      }
    });
  }

  searchbyname(name: string) {
    this.loading = true;
    this.http.getdeletedbytablenumber(name).subscribe({
      next: (res) => {
        this.tables = res;
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
        this.loading = false;
      }
    });
  }

  search(tablenumber: string) {
    const trimmedName = this.tablenumber.trim();
    if (trimmedName !== '') {
      this.router.navigate(['getdeletetable', trimmedName]);
      this.searchbyname(trimmedName);
    } else {
      this.router.navigate(['restoretables']);
      this.getalldeletedtables();
    }
  }

  restoretable(id: number) {
    this.loading = true;
    this.http.restoretable(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.loading = false;
        this.getalldeletedtables();
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
      }
    });
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
