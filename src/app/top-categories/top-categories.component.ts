import { Component, Input, Output } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent {
  @Input() childTopCategories: Category[];

  testArray: string[] = ['testCat', 'another test category'];

  anotherTest: Category[] = [
  new Category('Flan'),
  new Category('Boiling Water'),
  new Category('Peanut Butter and Jealous')
  ];
}
