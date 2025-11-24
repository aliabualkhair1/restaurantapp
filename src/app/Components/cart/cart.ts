import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menuiteminterface } from '../../Interfaces/Models/menuiteminterface';
import { FormsModule } from '@angular/forms';
import { Roles } from '../../Services/roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart implements OnInit {
  @Input() item!: Menuiteminterface; 
  @Output() orderitems = new EventEmitter();
  appear: boolean = false;
  amount!: number;
  isauth: boolean = false;

  constructor(private auth: Roles, private router: Router) {}

  ngOnInit(): void {
    this.isauth = this.auth.IsAuthenticated();
  }

  login() {
    this.router.navigate(['login']);
  }

  add() {
    this.orderitems.emit({
      orderItems: [
        {
          menuItemId: this.item.id,
          quantity: this.amount
        }
      ]
    });
    this.appear = false;
  }
}
