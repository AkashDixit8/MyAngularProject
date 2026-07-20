import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Tactical Hoodie Black',
      price: 2999,
      image: '/products/hoodie.png',
      category: 'Hoodie',
      description: 'Premium black tactical hoodie built for harsh environments.',
      quantity: 1
    },
    {
      id: 2,
      name: 'Tactical Hoodie Green',
      price: 3099,
      image: '/products/hoodie2.png',
      category: 'Hoodie',
      description: 'Military green tactical hoodie with premium comfort.',
      quantity: 1
    },
    {
      id: 3,
      name: 'Tactical Hoodie Desert Camo',
      price: 3299,
      image: '/products/hoodie3.png',
      category: 'Hoodie',
      description: 'Desert camouflage tactical hoodie inspired by special forces.',
      quantity: 1
    },
    {
      id: 4,
      name: 'Combat T-Shirt',
      price: 1899,
      image: '/products/tshirt.png',
      category: 'T-Shirt',
      description: 'Lightweight tactical t-shirt for everyday military wear.',
      quantity: 1
    },
    {
      id: 5,
      name: 'Combat Jacket',
      price: 4599,
      image: '/products/jacket.png',
      category: 'Jacket',
      description: 'Heavy-duty military combat jacket with premium protection.',
      quantity: 1
    },
    {
      id: 6,
      name: 'Tactical Cap',
      price: 999,
      image: '/products/cap.png',
      category: 'Cap',
      description: 'Adjustable tactical cap with military styling.',
      quantity: 1
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}