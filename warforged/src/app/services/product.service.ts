import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Tactical Hoodie',
      price: 2999,
      image: 'https://picsum.photos/300/350?random=1',
      category: 'Hoodie',
      description: 'Premium tactical hoodie'
    },
    {
      id: 2,
      name: 'Combat Jacket',
      price: 4599,
      image: 'https://picsum.photos/300/350?random=2',
      category: 'Jacket',
      description: 'Military-inspired combat jacket'
    },
    {
      id: 3,
      name: 'Cargo Pants',
      price: 2499,
      image: 'https://picsum.photos/300/350?random=3',
      category: 'Pants',
      description: 'Slim tactical cargo pants'
    },
    {
      id: 4,
      name: 'Military Boots',
      price: 3999,
      image: 'https://picsum.photos/300/350?random=4',
      category: 'Boots',
      description: 'Durable military boots'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}