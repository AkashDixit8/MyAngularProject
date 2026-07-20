import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  constructor() {}

  addToCart(product: Product) {

    const existingProduct = this.cart.find(
      item => item.id === product.id
    );

    if (existingProduct) {

      existingProduct.quantity++;

    } else {

      this.cart.push({
        ...product,
        quantity: 1
      });

    }

  }

  getCart(): Product[] {
    return this.cart;
  }

  getCartCount(): number {

    return this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

  }

  increaseQuantity(product: Product) {

    product.quantity++;

  }

  decreaseQuantity(product: Product) {

    if (product.quantity > 1) {

      product.quantity--;

    } else {

      this.removeFromCart(product);

    }

  }

  removeFromCart(product: Product) {

    this.cart = this.cart.filter(
      item => item.id !== product.id
    );

  }

  clearCart() {

    this.cart = [];

  }

  getTotalPrice(): number {

    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

  }

}