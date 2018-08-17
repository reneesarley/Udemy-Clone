import { Component, Input, Output } from '@angular/core';
import { Category } from '../models/category.model'

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css']
})
export class DiscoveryComponent {
  @Input() childCategories: Category[];
  @Input() childCourseList: Course[];
  selectedCategory: string = 'Design';

  coursesInSelectedCategory(){
    let selectedCourses: Course[] = [];
    for (let course of this.childCourseList){
      if(course.category === this.selectedCategory){
        selectedCourses.push(course);
      }
    }
    return selectedCourses;
  };

}
