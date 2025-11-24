import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddOrUpdateComplaintsAndSuggestions } from '../../../../Interfaces/Models/complaintsandsuggestions';
import { Complaintandsuggestionservice } from '../../../../Services/complaintandsuggestionservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecomplaintandsuggestion',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './updatecomplaintandsuggestion.html',
  styleUrls: ['./updatecomplaintandsuggestion.css'],
})
export class Updatecomplaintandsuggestion {
  formhandel!: FormGroup;
  id: any;
  updatecomplaintandsuggestion!: AddOrUpdateComplaintsAndSuggestions;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Complaintandsuggestionservice, private router: Router, private routing: ActivatedRoute) {
    this.id = routing.snapshot.paramMap.get('id');
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

    this.updatecomplaintandsuggestion = {
      problemandsolving: this.formhandel.value.problemandsolving
    };
    this.updatecomplaintandsuggestions();
  }

  updatecomplaintandsuggestions() {
    this.http.updatecomplaintsandsuggestions(this.id, this.updatecomplaintandsuggestion).subscribe({
      next: (res) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => {
          this.apiMessage = '';
          this.router.navigate(['/usercomplaintsandsuggestions']);
        }, 1000);
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء التحديث';
        this.apiMessageType = 'error';
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }
}
