import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Spinner } from '../spinner/spinner';
import { User } from '../../../Interfaces/Models/user';
import { Role } from '../../../Interfaces/Models/role';
import { Dashboardservice } from '../../../Services/dashboardservice';
import { Roles } from '../../../Services/roles';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [Spinner, CommonModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
})
export class Users implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  roles: string[] = ['--Select--', 'Admin', 'Staff', 'Customer', 'AdminAssistant'];
  username: any;
  role!: Role;
  isauth: boolean = false;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' | '' = '';

  constructor(private http: Dashboardservice, private router: Router, private routing: ActivatedRoute, private auth: Roles) {}

  ngOnInit(): void {
    this.isauth = this.auth.isAdmin();
    this.getallusers();
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
