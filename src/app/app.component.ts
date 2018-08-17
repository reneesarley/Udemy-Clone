import { Component } from '@angular/core';
import { Course } from './models/course.model';
import { Category } from './models/category.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  masterCategories: Category[] = [
     new Category('Development'),
     new Category('Business')
     new Category ('IT and Software'),
     new Category ('Design'),
     new Category ('Marketing'),
     new Category ('Personal Development'),
     new Category ('Photography'),
     new Category ('Music'),
     new Category ('Language'),
     new Category ('Health and Fitness'),
     new Category  ('Office Productivity'),
     new Category ('Lifestyle')
   ];


}
