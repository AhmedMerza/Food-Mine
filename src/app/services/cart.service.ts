import { Injectable } from '@angular/core';
import { food } from './food.service';

export interface cart {
  food: {id: number, name: string, img: string, quantity: number, price: number} [];
  totalPrice: number;
} 

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart: cart = {food: [], totalPrice: 0};

  constructor() { }

  addToCart (food: food) {
    let found = this.cart.food.find((item) => { return item.name === food.name});
    if (found) {
      found.quantity++;
      this.getTotalPrice();
      return;
    }
    this.cart.food.push({id: food.id, name: food.name, img: food.img, quantity: 1, price: food.price});
    this.getTotalPrice();
  }

  removeFood (food: food) {
    this.cart.food.forEach((item, index) => {
      if (item.name === food.name) {
        this.cart.food.splice(index, 1);
        this.getTotalPrice();
        return;
      }});
  }

  getTotalPrice () {
    let totalPrice = 0;
    this.cart.food.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    this.cart.totalPrice = totalPrice;
    return totalPrice;
  }

  changeQuantity(id: number, quantity: string) {
    this.cart.food.forEach((item) => {
      if (item.id === id) {
        item.quantity = +quantity;
        this.getTotalPrice();
        return;
      }
    });
  }

  getCart () {
    return this.cart;
  }


}
