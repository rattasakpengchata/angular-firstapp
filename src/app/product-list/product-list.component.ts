import { Component } from '@angular/core';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productss = products;

  constructor(
    private cartService: CartService
  ) { }

  addToCart(productx: Product) {
    this.cartService.addToCart(productx);
    window.alert('Your product has been added to the cart!');
  }
  share() {
    window.alert('The product has been shared!');
  }
  toggle(){  }
  
  onNotify(){
    window.alert('notify buuton is clicked!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/