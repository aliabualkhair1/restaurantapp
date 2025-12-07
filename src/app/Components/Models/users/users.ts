import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from '../spinner/spinner';
import { User } from '../../../Interfaces/Models/user';
import { Role } from '../../../Interfaces/Models/role';
import { Dashboardservice } from '../../../Services/dashboardservice';
import { Roles } from '../../../Services/roles';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [Spinner, CommonModule,FormsModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
})
export class Users implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  roles: string[] = ['--Select--', 'Admin', 'Staff', 'Customer', 'AdminAssistants'];
  username: any;
  role!: Role;
  isauth: boolean = false;
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Dashboardservice, private router: Router, private routing: ActivatedRoute, private auth: Roles) {}

  ngOnInit(): void {
      this.routing.params.subscribe(res=>{
      this.username=res['username']
      if(this.username){
this.getuser(this.username)
      }
      else{
        this.getallusers();
      }
    }) 
    this.isauth = this.auth.isAdmin();
  }

  getallusers() {
    this.loading = true;
    this.http.getallusers().subscribe({
      next: (res: User[]) => {
        this.users = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showMessage(err.error || 'حدث خطأ من السيرفر', 'error');
      }
    });
  }
getuser(name:string){
this.http.getuserbyusername(name).subscribe({
  next:(res)=>{
    this.users = [res];
  },
  error:(err)=>{
    this.loading=false
    this.showMessage(err.error || 'حدث خطأ من السيرفر', 'error');
  }
})
}
searchbyusername(name:string){
      const username = name.trim();
    if (username !== '') {
  this.router.navigate(['users',name])
      this.getuser(name);
    } else {
      this.router.navigate(['users']);
      this.getallusers    
}
  this.router.navigate(['users',name])
}
  updateuserrole(username: string, event: any) {
    const value = event.target.value;
    if (!username) {
      this.showMessage('اسم المستخدم غير موجود', 'error');
      return;
    }
    this.role = { username: username, newrole: value };
    this.http.userrolewithusername(this.role).subscribe({
      next: (res: any) => {
        this.showMessage(res, 'success'); 
        this.getallusers();
      },
      error: (err) => {
        this.showMessage(err.error || 'حدث خطأ من السيرفر', 'error');
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
