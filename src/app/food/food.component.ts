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
    constructor(private foodService: FoodService, activeRoute: ActivatedRoute, private cartService: CartService) {
      activeRoute.params.subscribe(params => { 
        this.food = this.foodService.getFood(params['id']);
      });
    }

    onAddToCart(food: food) {
      this.cartService.addToCart(food);
     }
}
