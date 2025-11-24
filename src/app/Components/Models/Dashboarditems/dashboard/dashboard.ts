import { Component, OnInit } from '@angular/core';
import { Dashboardservice } from '../../../../Services/dashboardservice';
import { Spinner } from "../../spinner/spinner";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Spinner, CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  data: any = {};
  displayedValues: any = {};
  loading: boolean = false;

  constructor(private http: Dashboardservice, private routing: Router) {}

  ngOnInit(): void {
    this.getsystemanalysis();
  }

  getsystemanalysis() {
    this.loading = true;
    this.http.getsystemanalysis().subscribe({
      next: (res) => {
        this.data = res;
        for (let key in res) {
          this.count(key, res[key]);
        }

        this.loading = false; 
      },
      error: (err) => {
        alert(err.error.error);
        this.loading = false;
      }
    });
  }

  count(key: string, target: number) {
    this.displayedValues[key] = 0;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      this.displayedValues[key] = current;
      if (current >= target) {
       this.displayedValues[key] = target
        clearInterval(interval);
      };
    },1);
  }

  getusers() { this.routing.navigate(['/users']); }
  getcustomerquestions() { this.routing.navigate(['/getcustomerquestions']); }
  getcategories() { this.routing.navigate(['/categories']); }
  getmenuitems() { this.routing.navigate(['/menuitems']); }
  getorders() { this.routing.navigate(['/orders']); }
  getreservations() { this.routing.navigate(['/reservations']); }
  getcomplaintsandsuggestions() { this.routing.navigate(['/complaintsandsuggestions']); }
  getordersfeedback() { this.routing.navigate(['/ordersfeedback']); }
  getreservationsfeedback() { this.routing.navigate(['/reservationsfeedback']); }
  getorderspaid() { this.routing.navigate(['/orderspaid']); }
  getorderscancelled() { this.routing.navigate(['/orderscancelled']); }
  getreservationspaid() { this.routing.navigate(['/reservationspaid']); }
  getreservationscancelled() { this.routing.navigate(['/reservationscancelled']); }
}
