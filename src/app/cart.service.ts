import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Cart: Product[] = [];


  constructor(
    private http: HttpClient
  ) {}

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  
  addToCart(product: Product) {
    this.Cart.push(product);
  }

  getItems() {
    return this.Cart;
  }

  clearCart() {
    this.Cart = [];
    return this.Cart;
  }
}
