import { Component } from '@angular/core';
import { Userinfoservice } from '../../../Services/userinfoservice';
import { Updatedetails } from '../../../Interfaces/Models/userdetails';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuserdetails',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './updateuserdetails.html',
  styleUrls: ['./updateuserdetails.css'],
})
export class Updateuserdetails {
  update!: Updatedetails;
  formgroup!: FormGroup;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Userinfoservice, private router: Router) {
    this.formgroup = new FormGroup({
      Firstname: new FormControl(null, [Validators.pattern('^[A-Za-z]+$')]),
      Lastname: new FormControl(null, [Validators.pattern('^[A-Za-z]+$')]),
      Phonenumber: new FormControl(null, [Validators.pattern('^(010|011|012|015)[0-9]{8}$')]),
      Email: new FormControl(null, [Validators.email])
    });
  }

  get Email() { return this.formgroup.get('Email'); }
  get FirstName() { return this.formgroup.get('Firstname'); }
  get LastName() { return this.formgroup.get('Lastname'); }
  get PhoneNumber() { return this.formgroup.get('Phonenumber'); }

  submit() {
    this.formgroup.markAllAsTouched();
    if (this.formgroup.invalid) return;

    this.update = {
      email: this.formgroup.value.Email,
      firstName: this.formgroup.value.Firstname,
      lastName: this.formgroup.value.Lastname,
      phoneNumber: this.formgroup.value.Phonenumber
    };
    this.updateuserdetails();
  }

  updateuserdetails() {
    this.http.updateuserdetails(this.update).subscribe({
      next: (res) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => {
          this.apiMessage = '';
        this.router.navigate(['login'])
        }, 1000);
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء تحديث البيانات';
        this.apiMessageType = 'error';
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }
}
