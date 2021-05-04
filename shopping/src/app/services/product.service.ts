import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'This is a product 1 description', 24),
    new Product(2, 'Product 2', 'This is a product 2 description', 36),
    new Product(3, 'Product 3', 'This is a product 3 description', 44),
    new Product(4, 'Product 4', 'This is a product 4 description', 28),
    new Product(5, 'Product 5', 'This is a product 5 description', 52),
    new Product(6, 'Product 6', 'This is a product 6 description', 19),
    new Product(7, 'Product 7', 'This is a product 7 description', 42)
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}

