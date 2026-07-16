import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Shop } from './pages/shop/shop';
import { Product } from './pages/product/product';
import { Cart } from './pages/cart/cart';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'shop',
    component: Shop
  },
  {
    path: 'product',
    component: Product
  },
  {
    path: 'cart',
    component: Cart
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  }
];