import { Component, OnInit } from "@angular/core";
import { Spinner } from "../../spinner/spinner";
import { CommonModule } from "@angular/common";
import { showComplaintsAndSuggestions } from "../../../../Interfaces/Models/complaintsandsuggestions";
import { Complaintandsuggestionservice } from "../../../../Services/complaintandsuggestionservice";
import { Router } from "@angular/router";
import { Complaintsandsuggestionsstatus } from "../../../../Services/SubComponents/complaintsandsuggestionsstatus";

@Component({
  selector: 'app-deletedcomplaintsandsuggestions',
  imports: [Spinner, CommonModule],
  templateUrl: './deletedcomplaintsandsuggestions.html',
  styleUrl: './deletedcomplaintsandsuggestions.css',
})
export class Deletedcomplaintsandsuggestions implements OnInit {
  loading: boolean = false;
  complaintsandsuggestions: showComplaintsAndSuggestions[] = [];

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Complaintandsuggestionservice, private router: Router,private compandsugg:Complaintsandsuggestionsstatus) {}

  ngOnInit(): void {
    this.getalldeletedcomplaintsandsuggestions();
  }

  getalldeletedcomplaintsandsuggestions() {
    this.loading = true;
    this.http.getdeletedcomplaintsandsuggestions().subscribe({
      next: (res) => {
        this.complaintsandsuggestions = res;
        this.compandsugg.setDeletedComplaintsAndSuggestions(res)
        this.loading = false;
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء جلب البيانات';
        this.apiMessageType = 'error';
        this.loading = false;
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }

  restorecomplaintandsuggestion(id: number) {
    this.loading = true;
    this.http.restorecomplaintsandsuggestions(id).subscribe({
      next: (res) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => this.apiMessage = '', 1000);
        this.loading = false;
        this.getalldeletedcomplaintsandsuggestions();
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء الاستعادة';
        this.apiMessageType = 'error';
        this.loading = false;
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }

  restore(id: number) {
    this.restorecomplaintandsuggestion(id);
  }
}
