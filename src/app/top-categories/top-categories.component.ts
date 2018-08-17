import { Component, Input, Output } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent {
  @Input() childTopCategories: Category[];
  testArray: Category[] = ['testCat', 'another test category']
  constructor() { }

}
