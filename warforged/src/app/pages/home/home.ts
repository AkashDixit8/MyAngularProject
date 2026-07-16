import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { ProductCard } from '../../components/product-card/product-card';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  imports: [Hero, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

}