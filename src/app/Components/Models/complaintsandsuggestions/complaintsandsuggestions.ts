import { Component, OnInit } from '@angular/core';
import { Spinner } from '../spinner/spinner';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddOrUpdateComplaintsAndSuggestions, showComplaintsAndSuggestions } from '../../../Interfaces/Models/complaintsandsuggestions';
import { Complaintandsuggestionservice } from '../../../Services/complaintandsuggestionservice';

@Component({
  selector: 'app-complaintsandsuggestions',
  imports: [Spinner, CommonModule, ReactiveFormsModule],
  templateUrl: './complaintsandsuggestions.html',
  styleUrl: './complaintsandsuggestions.css',
})
export class Complaintsandsuggestions implements OnInit {
  loading: boolean = false;
  complaintsandsuggestions: showComplaintsAndSuggestions[] = [];
  complaintandsuggestion!: AddOrUpdateComplaintsAndSuggestions;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Complaintandsuggestionservice, private router: Router, private routing: ActivatedRoute) {}

  ngOnInit(): void {
    this.getallcomplaintsandsuggestions();
  }

  getallcomplaintsandsuggestions() {
    this.loading = true;
    this.http.getcomplaintsandsuggestions().subscribe({
      next: (res) => {
        this.complaintsandsuggestions = res;
        this.loading = false;
      },
      error: (err) => {
        this.apiMessage = err.error?.error || 'حدث خطأ أثناء جلب البيانات';
        this.apiMessageType = 'error';
        this.loading = false;
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }

  add() {
    this.router.navigate(['addcomplaintsandsuggestions']);
  }

  update(id: number) {
    this.router.navigate(['updatecomplaintsandsuggestions', id]);
  }

  deletecomplaintandsuggestion(id: number) {
    this.loading = true;
    this.http.deletecomplaintsandsuggestions(id).subscribe({
      next: (res) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => this.apiMessage = '', 1000);
        this.loading = false;
        this.getallcomplaintsandsuggestions();
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء الحذف';
        this.apiMessageType = 'error';
        this.loading = false;
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }

  getalldeletedcomplaintsandsuggestions() {
    this.router.navigate(['userdeletedcomplaintsandsuggestions']);
  }

  delete(id: number) {
    this.deletecomplaintandsuggestion(id);
  }
}
