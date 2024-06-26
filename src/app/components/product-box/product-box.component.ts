import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
@Input() fullWidthMode = false;
@Input()product:Product |undefined;
 
constructor(private storeService: StoreService){}

@Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
 
addToCart(): void {
  this.onAddToCart.emit(this.product);

}
}