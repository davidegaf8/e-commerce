import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url = 'https://fakestoreapi.com';
  constructor(private httpClient: HttpClient) { }

  getProducts( limit: number, sort: string, category?: string):Observable<Array<Product>> {
    return this.httpClient.get <Array<Product>>
    (`${this.url}/products${category ? '/category/' + category : ''}?limit=${limit}&sort=${sort}`);
  }

  getCategories():Observable<Array<string>> {
    return this.httpClient.get <Array<string>>(`${this.url}/products/categories`);
  }
}
