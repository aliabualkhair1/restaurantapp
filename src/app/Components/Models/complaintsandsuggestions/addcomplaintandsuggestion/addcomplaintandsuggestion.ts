import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddOrUpdateComplaintsAndSuggestions } from '../../../../Interfaces/Models/complaintsandsuggestions';
import { Complaintandsuggestionservice } from '../../../../Services/complaintandsuggestionservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcomplaintandsuggestion',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './addcomplaintandsuggestion.html',
  styleUrl: './addcomplaintandsuggestion.css',
})
export class Addcomplaintandsuggestion {
  formhandel!: FormGroup;
  addcomplaintandsuggestion!: AddOrUpdateComplaintsAndSuggestions;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Complaintandsuggestionservice, private router: Router) {
    this.formhandel = new FormGroup({
      problemandsolving: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9\u0621-\u064A ]+$")
      ])
    });
  }

  get problemandsolving() {
    return this.formhandel.get('problemandsolving');
  }

  submit() {
    this.formhandel.markAllAsTouched();
    if (this.formhandel.invalid) return;

    this.addcomplaintandsuggestion = {
      problemandsolving: this.formhandel.value.problemandsolving
    };
    this.addcomplaintandsuggestions();
  }

  addcomplaintandsuggestions() {
    this.http.addcomplaintsandsuggestions(this.addcomplaintandsuggestion).subscribe({
      next: (res) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => {
          this.apiMessage = '';
          this.router.navigate(['/usercomplaintsandsuggestions']);
        }, 1000);
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء الإضافة';
        this.apiMessageType = 'error';
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }
}
