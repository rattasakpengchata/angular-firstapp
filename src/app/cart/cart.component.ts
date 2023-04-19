import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartServicex.getItems();
  checkoutForm = this.formBuilderx.group(
    {name:'',address:''}
  );

  onSubmit():void{
    this.items = this.cartServicex.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  constructor(
    private cartServicex: CartService,
    private formBuilderx: FormBuilder,
    ) { }

  ngOnInit(): void {
  }

}
