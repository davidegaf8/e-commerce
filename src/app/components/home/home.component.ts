import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: { [id: number]: number } = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cols: number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort: string = 'desc';
  showItemCount: number = 12;
  
  constructor(private cartService: CartService, private storeService: StoreService) { }
  ngOnInit(): void {
   this.getProducts();
  }

  getProducts(): void {
    this.storeService.getProducts(this.showItemCount, this.sort,this.category).subscribe(data => {
      this.products = data;
    })
  }
  
  OnColumnsCountChange(count: number) {
    this.cols = count;
    this.rowHeight = ROWS_HEIGHT[this.cols];
}

  OnShowCategory(category: string) {
    this.category = category;
    this.getProducts();
  }

  addToCart(product: Product):void{
   this.cartService.addToCart({name: product.title, price: product.price, quantity: 1, id: product.id, product: product.image});
  }

  onItemsCountChange(count: number) {
    this.showItemCount = count;
    this.getProducts();
  }

  onSortBy(newSort: string) {
    this.sort = newSort;
    this.getProducts();
  }
}
