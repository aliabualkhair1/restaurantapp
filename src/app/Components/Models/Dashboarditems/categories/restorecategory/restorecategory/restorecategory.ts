import { Component, OnInit } from "@angular/core"
import { Spinner } from "../../../../spinner/spinner"
import { CommonModule } from "@angular/common"
import { Categoryinterface } from "../../../../../../Interfaces/Models/categoryinterface"
import { CategoryServices } from "../../../../../../Services/category-services"
import { ActivatedRoute, Router } from "@angular/router"
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-restorecategory',
  imports: [Spinner, CommonModule, FormsModule],
  templateUrl: './restorecategory.html',
  styleUrl: './restorecategory.css',
})
export class Restorecategory implements OnInit {
  loading: boolean = false
  categories: Categoryinterface[] = []
  name: any
  apiMessage: string = ''
  apiMessageType: 'success' | 'error' = 'success'

  constructor(private http: CategoryServices, private routing: ActivatedRoute, private router: Router) {
    this.name = routing.snapshot.paramMap.get('name')
  }

  ngOnInit(): void {
    if (this.name == null) {
      this.getdeletedcategories()
    } else {
      this.getcategorybyname(this.name)
    }
  }

  getdeletedcategories() {
    this.loading = true
    this.http.getalldeletedcategories().subscribe({
      next: (res) => {
        this.categories = res
        this.loading = false
      },
      error: (err) => {
        this.showMessage(err.error, 'error')
        this.loading = false
      }
    })
  }

  restorecategory(id: number) {
    this.http.restorecategorybyid(id).subscribe({
      next: (res) => {
        this.showMessage(res, 'success')
        setTimeout(() => {
          this.router.navigate(['/restoredeletedcategories'])
          this.getdeletedcategories()
        }, 1000)
      },
      error: (err) => {
        this.showMessage(err.error, 'error')
      }
    })
  }

  restorecategorybyid(id: number) {
    this.router.navigate(['restoredeletedcategories/restore', id])
    this.restorecategory(id)
  }

  getcategorybyname(name: string) {
    this.http.getdeletedcategorybyname(name).subscribe({
      next: (res) => {
        this.categories = res
      },
      error: (err) => {
        this.showMessage(err.error, 'error')
      }
    })
  }

  search(name: string) {
    const trimmedName = name.trim()
    if (trimmedName !== '') {
      this.router.navigate(['restoredeletedcategories', trimmedName])
      this.getcategorybyname(trimmedName)
    } else {
      this.router.navigate(['restoredeletedcategories'])
      this.getdeletedcategories()
    }
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.apiMessage = message
    this.apiMessageType = type
    setTimeout(() => this.apiMessage = '', type === 'success' ? 1000 : 5000)
  }
}
