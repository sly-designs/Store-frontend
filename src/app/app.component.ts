import { Component } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header [cart]="cart"]></app-header>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  cart: Cart = { items: [] };

  constructor(private cartSevice: CartService) {}

  ngOnInit() {
    this.cartSevice.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }
}
