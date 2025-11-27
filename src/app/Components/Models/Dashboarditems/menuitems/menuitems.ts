import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Spinner } from "../../spinner/spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { Menuiteminterface } from "../../../../Interfaces/Models/menuiteminterface";
import { Menuitemsservice } from "../../../../Services/menuitemsservice";
import { FormsModule } from "@angular/forms";
import { Environment } from "../../../../Environment/environment";
import { Menuitemsstatus } from "../../../../Services/SubComponents/menuitemsstatus";

@Component({
  selector: 'app-menuitems',
  imports: [CommonModule, Spinner, FormsModule],
  templateUrl: './menuitems.html',
  styleUrl: './menuitems.css',
})
export class AllMenuitems implements OnInit {
  environment = Environment.StaticFiles;

  loading: boolean = false;
  currentpage: number = 1;
  totalpages: number = 1;
  menuName: string = '';
  itemName: string = '';
  minPrice?: number;
  maxPrice?: number;
  price?: number;

  menuitems: Menuiteminterface[] = [];
  unavailablemenuitems: Menuiteminterface[] = [];
  deletedmenuitems: Menuiteminterface[] = [];
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Menuitemsservice, private router: Router,private menuitem:Menuitemsstatus) {}

  ngOnInit(): void {
     this.menuitem.UnAvailableMenuItems$.subscribe(data=>{
  this.unavailablemenuitems=data
    })  
    this.menuitem.DeletedMenuItems$.subscribe(data=>{
   this.deletedmenuitems=data
     })  
      this.http.getunavailablemenuitems(this.currentpage).subscribe(res => {
    this.menuitem.setUnAvailableMenuItems(res.items);
  });
    this.http.getalldeletedmenuitems(this.currentpage).subscribe(res => {
    this.menuitem.setDeletedMenuItems(res.items);
  });
    this.getmenuitems(this.currentpage);  
  }

  getmenuitems(pagenumber: number) {
    this.loading = true;
    this.http.getmenuitems(pagenumber).subscribe({
      next: (res) => {
        this.menuitems = res.items;
        this.currentpage = res.pageNumber;
        this.totalpages = res.totalPages;
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء تحميل البيانات', 'error');
        this.loading = false;
      }
    });
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

  getdeletedmenuitems() {
    this.router.navigate(['restoremenuitems']);
  }

  deletemenuitem(id: number) {
    this.loading = true;
    this.http.deletemenuitems(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getmenuitems(this.currentpage);
         this.http.getalldeletedmenuitems(this.currentpage).subscribe(res => {
    this.menuitem.setDeletedMenuItems(res.items);
         })
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ أثناء الحذف', 'error');
        this.loading = false;
      }
    });
  }

  delete(id: number) {
    this.deletemenuitem(id);
  }

  update(id: number) {
    this.router.navigate(['updatemenuitem', id]);
  }

  unavailable() {
    this.router.navigate(['unavailable']);
  }

  applyFilter() {
    this.loading = true;
    this.http.getmenuitemsbyfilteration(
      this.menuName,
      this.itemName,
      this.currentpage,
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
        this.showMessage(err.error || 'حدث خطأ أثناء تصفية البيانات', 'error');
        this.loading = false;
      }
    });
  }

  addmenuitem() {
    this.router.navigate(['menu']);
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000);
  }
}
