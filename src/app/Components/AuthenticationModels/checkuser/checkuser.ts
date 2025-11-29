import { Component } from '@angular/core';
import { Userinfoservice } from '../../../Services/userinfoservice';
import { Router } from '@angular/router';
import { checkuser } from '../../../Interfaces/Models/userdetails';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authentication } from '../../../Services/authentication';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkuser',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkuser.html',
  styleUrls: ['./checkuser.css'],
})
export class Checkuser {
  check!: checkuser;
  formgroup: FormGroup;
 apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';
  constructor(private http: Authentication, private router: Router) {
    this.formgroup = new FormGroup({
      Email: new FormControl(null, [Validators.required, Validators.email]),
      UserName: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z0-9_]+$")]),
      NationalId: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{14}$')])
    });
  }

  submit() {
    if (this.formgroup.invalid) return;

    this.check = {
      email: this.formgroup.value.Email,
      username: this.formgroup.value.UserName,
      nationalId: this.formgroup.value.NationalId,
    };

    this.checkuserdetails();
  }

  get Email() { return this.formgroup.get('Email'); }
  get UserName() { return this.formgroup.get('UserName'); }
  get NationalId() { return this.formgroup.get('NationalId'); }

  checkuserdetails() {
    this.http.checkuser(this.check).subscribe({
      next: (res) => {
        this.apiMessage=res
        this.apiMessageType='success'
        setTimeout(()=>{
          this.apiMessage=''
          this.router.navigate(['changepassword'], { queryParams: { username: this.formgroup.value.UserName } });
        },1000)
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء التسجيل';
        this.apiMessageType = 'error';     
        setTimeout(()=>{
          this.apiMessage=''
        },3000)
       }
    });
  }
}
