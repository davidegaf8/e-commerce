import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy{
@Output() showCategory = new EventEmitter<string>();
categories: string[] = [];
categoriesSubcription: Subscription | undefined;

constructor(private storeService: StoreService) {}
  

OnShowCategory(category: string) {
    this.showCategory.emit(category);
}

ngOnInit(): void {
  this.categoriesSubcription=this.storeService.getCategories().subscribe((categories) => {
    this.categories = categories;
  })}

  ngOnDestroy(): void {
    if(this.categoriesSubcription) {
      this.categoriesSubcription.unsubscribe();
    }
  }

}
