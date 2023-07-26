import { Component, OnInit } from '@angular/core';
import {food, FoodService, tag } from '../services/food.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  foods: food[] = [];
  search: string = '';
  tags: tag[] = [];
  currentTagName: string= 'All';
  activeTag: boolean[] = [];
  lastActiveTag: number = 0;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foods = this.foodService.getFoods();
    this.tags = this.foodService.getTags();
    this.activeTag.push(true);
    for (let i = 0; i < this.tags.length - 1; i++) {
      this.activeTag.push(false);
    }
  }

  onTagClick(tagName: string, index: number) {
    this.activeTag[this.lastActiveTag] = false;
    this.activeTag[index] = true;
    this.lastActiveTag = index;
    this.currentTagName = tagName;
    this.onSearch();
  }

  onSearch() { 
    this.foods = this.foodService.getFoods().filter((food) => {
      return food.name.toLowerCase().includes(this.search.toLowerCase()) &&
       ( this.currentTagName === 'All' || food.tag.toLowerCase().includes(this.currentTagName.toLowerCase()));
    })
  }

  reset() {
    console.log('reset');
    this.search = '';
    this.onTagClick('All', 0);
  }

}
