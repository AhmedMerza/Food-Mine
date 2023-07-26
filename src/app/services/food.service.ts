import { Injectable } from '@angular/core';

export interface food {
  id: number;
  name: string;
  img: string;
  tag: tag["name"];
  price: number;
  desc: string;
  favorite: boolean;
  cookTime: number;
}

export interface tag {
  name: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})


export class FoodService {

  private tags: tag[] = [
    {name: 'All', count: 6},
    {name: 'Breakfast', count: 2},
    {name: 'Lunch', count: 2},
    {name: 'Dinner', count: 1},
    {name: 'Drinks', count: 1},
  ];

  private foods: food[] = [
    {id: 0, name: 'Omelet', tag: 'breakfast', img: 'https://th.bing.com/th/id/OIP.smJdALq5kPb0wh9vOC57FgHaE8?pid=ImgDet&rs=1', price: 1, desc: 'This is an omelet', favorite: true, cookTime: 10},
    {id: 1, name: 'Boiled Egg', tag: 'breakfast', img: 'https://th.bing.com/th/id/OIP.4SRj_uyNXAs2CXDSAEjFWQHaJ1?pid=ImgDet&rs=1', price: 1, desc: 'This is a boiled egg', favorite: true, cookTime: 15},
    {id: 2, name: 'Chicken and Rice', tag: 'lunch', img: 'https://th.bing.com/th/id/R.b523bc2da68af8851864c4bd8d0c33e4?rik=AYa%2bxzojIMTiuA&pid=ImgRaw&r=0', price: 2, desc: 'This is Chicken and Rice', favorite: false, cookTime: 30},
    {id: 3, name: 'Pizza', tag: 'dinner', img: 'https://th.bing.com/th/id/OIP.OZny5F6g0QAQPLsU_4HnEAHaE8?w=288&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7', price: 5, desc: 'This is a pizza', favorite: false, cookTime: 30},
    {id: 4, name: 'Chicken with veggies', tag: 'lunch', img: 'https://th.bing.com/th/id/OIP.-5po_sGV6n-_B0pWJ1v_VAHaE8?pid=ImgDet&rs=1', price: 2, desc: 'Some healthy foods', favorite: true, cookTime: 30},
    {id: 5, name: 'A bottle of water', tag: 'drinks', img: 'https://th.bing.com/th/id/R.41335a493e2680e9ab4cdd6977e1e624?rik=4g1Jo8Z2CsOJEA&pid=ImgRaw&r=0', price: 0.2, desc: 'A bottle of water', favorite: true, cookTime: 0},
  ]

  constructor() { }

  getFood (id: number) {
    return this.foods[id];
  }

  getFoodById (id: number) {
    return this.foods.find((food) => {
      return food.id === id;
    });
  }

  getFoods() {
    return this.foods.slice();
  }

  getTags () {
    return this.tags.slice();
  }
}
