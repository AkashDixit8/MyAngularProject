import { Component, Input } from '@angular/core';

import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product!: Product;

  constructor(private cartService: CartService){}

  addToCart(){

    this.cartService.addToCart(this.product);

    alert(this.product.name + " added to cart!");

  }

}