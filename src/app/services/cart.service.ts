import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart  =  new BehaviorSubject<Cart>({items: []})
  constructor(private snackBar: MatSnackBar) {}

  addToCart(item:CartItem) : void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({items})
    this.snackBar.open('1 item added to cart', 'Ok', {duration: 2000})
  }

  getTotal(items: Array<CartItem>): number { // total
    return items.map(t => t.price * t.quantity).reduce((acc, value) => acc + value, 0);
   }

   clearCart(): void {
    this.cart.next({items: []});
    this.snackBar.open('Cart is cleared', 'Ok', {duration: 2000})
   }

   removeFromCart( item: CartItem): void {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !== item.id)
    this.cart.next({items: filteredItems});
    this.snackBar.open('1 item removed from cart', 'Ok', {duration: 2000})
}

   removeQuantity(item: CartItem) {
    const itemInCart = this.cart.value.items.find((_item) => _item.id === item.id);
    if (!itemInCart) return;
    itemInCart.quantity -= 1;
    if (itemInCart.quantity === 0) {
      this.removeFromCart(item);
    } else {
      this.cart.next({...this.cart.value});
      this.snackBar.open('1 item removed from cart', 'Ok', {duration: 2000})
    }
   }
}