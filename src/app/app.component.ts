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
  categories: Category[] = [
    'Development', 'Design'
  ]

}
