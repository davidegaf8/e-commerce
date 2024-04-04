import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
@Output() columnsCountChange = new EventEmitter<number>(); 
@Output() itemsCountChange = new EventEmitter<number>();
@Output() sortChange = new EventEmitter<string>();

 sort: string = 'desc';
 showItemCount: number = 12;

 OnSortBy(newSort: string) {
    this.sort = newSort;
    this.sortChange.emit(newSort);
 }

 OnShowItemCount(count: number) {
    this.showItemCount = count;
    this.itemsCountChange.emit(count);
 }

 OnColumnsUpdated(colNum: number) {
    this.columnsCountChange.emit(colNum);
 }
}
