import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: []});

  constructor(private_snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
  }

}
