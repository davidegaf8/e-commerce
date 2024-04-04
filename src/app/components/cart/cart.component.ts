import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cart: Cart = {
  items: [
    {
     product: 'https://via.placeholder.com/150',
     name: 'Sneackers',
     price: 150,
     quantity: 1,
     id: 1
    },
    {
     product: 'https://via.placeholder.com/150',
     name: 'Sneackers',
     price: 150,
     quantity: 2,
     id: 2
    },
    {
     product: 'https://via.placeholder.com/150',
     name: 'Sneackers',
     price: 150,
     quantity: 3,
     id: 3
    }
  ]
}

dataSource : Array<CartItem> = [];
displayedColumns = ['product', 'name', 'price', 'quantity','total','action'];

 constructor(private cartService: CartService) { }

ngOnInit(): void {
  this.cartService.cart.subscribe((_cart: Cart) => {
    this.cart = _cart;
    this.dataSource = this.cart.items
  })
}

getTotal(items: Array<CartItem>): number { // total
  return this.cartService.getTotal(items);
}

emptyCart() { // empty
 this.cartService.clearCart();
}

removeFromCart(item: CartItem) { // remove
  this.cartService.removeFromCart(item);
}

removeQuantity(item: CartItem) {
  this.cartService.removeQuantity(item);
  }

addQuantity(item: CartItem) {
  this.cartService.addToCart(item);
  }
}