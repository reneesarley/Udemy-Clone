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

}
