import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  getCartCount() {
    return this.cart.length;
  }

}