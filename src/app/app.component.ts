import { Component } from '@angular/core';
import { Course } from './models/course.model';
import { Categories } from './models/catergories.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  categories: Categories[] = [
    'Development', 'Design'
  ]

}
