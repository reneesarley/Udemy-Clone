import { Component } from '@angular/core';
import { Course } from './models/course.model';
import { Category } from './models/category.model'
import { course } from './models/course.model'

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
   masterCourseList: Course[] = [
     new Course('Development', 'Complete Python Bootcamp: Go from zero to hero in Python 3',['Jose Portilla'], 4.5, 80220, 194.99, 10.99, 'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!'),
     new Course('Development', 'The Web Developer Bootcamp',['Colt Steele'], 4.7, 85435, 199.99, 10.99, 'The only course you need to learn web development - HTML, CSS, JS, Node, and More!')
   ]


}
