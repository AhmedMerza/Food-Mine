import { Component } from '@angular/core';

import {food, FoodService } from '../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
    food: food = {} as food;
    alert: boolean = false;
    addToCartText: string = 'Add to Cart';
    timeOut: any;

    constructor(private foodService: FoodService, activeRoute: ActivatedRoute, private cartService: CartService) {
      activeRoute.params.subscribe(params => { 
        this.food = this.foodService.getFood(params['id']);
      });
    }

    onAddToCart(food: food) {
      let item = this.cartService.getCartItem(food.id)[0];
      if (item && item.quantity == 5) {
        this.addToCartText = 'Max Quantity Reached';
      } else {
        this.cartService.addToCart(food);
        this.addToCartText = 'Added to Cart';
      }
      this.alert = true;
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        this.alert = false;
        this.addToCartText = 'Added to Cart'
      }, 2000);
     }
}
