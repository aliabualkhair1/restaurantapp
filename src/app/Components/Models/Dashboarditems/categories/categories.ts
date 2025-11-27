import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryServices } from '../../../../Services/category-services';
import { Categoryinterface } from '../../../../Interfaces/Models/categoryinterface';
import { Spinner } from '../../spinner/spinner';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../../../Services/menuservice';
import { Addmenu } from './addmenu/addmenu';
import { Categorystatus } from '../../../../Services/SubComponents/categorystatus';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, Spinner, FormsModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {
  loading: boolean = false;
  categories: Categoryinterface[] = [];
  deletedcategories: Categoryinterface[] = [];
  name: any;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(
    private http: CategoryServices,
    private routing: ActivatedRoute,
    private router: Router,
    private delcategory:Categorystatus
  ) {
    this.name = this.routing.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.delcategory.deletedCategories$.subscribe(data=>{
      this.deletedcategories=data
    })
    this.http.getalldeletedcategories().subscribe(res=>{
    this.delcategory.setDeletedCategories(res)
    })
    if (this.name == null) {
      this.getallcategories();
    } else {
      this.getcategorybyname(this.name);
    }
  }

  getallcategories() {
    this.loading = true;
    this.http.getallcategories().subscribe({
      next: (res) => {
        this.categories = res;
        this.loading = false;
      },
      error: (err) => {
        this.categories = [];
        this.loading = false;
      }
    });
  }

  deletecategory(id: number) {
    this.loading = true;
    this.http.deletecategorybyid(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success');
        this.getallcategories();
            this.http.getalldeletedcategories().subscribe(res=>{
            this.delcategory.setDeletedCategories(res)
    })
        this.loading = false;
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
        this.loading = false;
      }
    });
  }
  addcategory() {
    this.router.navigate(['addcategory']);
  }

  updatecategory(id: number) {
    this.router.navigate(['updatecategory', id]);
  }

  deletedcategorybyid(id: number) {
    this.router.navigate(['categories/', id]);
    this.deletecategory(id);
  }

  restoredeletedcategories() {
    this.router.navigate(['restoredeletedcategories']);
  }

  getcategorybyname(name: string) {
    this.http.getcategorybyname(this.name).subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        this.showMessage(err.error, 'error');
      }
    });
  }

  search(name: string) {
    const trimmedName = this.name.trim();
    if (trimmedName !== '') {
      this.router.navigate(['categories/search', trimmedName]);
      this.getcategorybyname(trimmedName);
    } else {
      this.router.navigate(['categories']);
      this.getallcategories();
    }
  }

  category() {
    this.router.navigate(['addcategory']);
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message;
    this.apiMessageType = type;
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000);
  }
}
