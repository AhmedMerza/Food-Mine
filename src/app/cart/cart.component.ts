import { Component } from '@angular/core';
import { cart, CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart = {} as cart;

  constructor(private foodService: FoodService, private cartService: CartService) {
    this.setCart();
   }

  setCart () {
    this.cart = this.cartService.getCart();
  }

  changeQuantity (id: number, quantity: string) {
    this.cartService.changeQuantity(id, quantity);
    this.setCart();
  }

  removeFood (id: number) {
    this.cartService.removeFood(this.foodService.getFood(id));
    this.setCart();
  }

}
