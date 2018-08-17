import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-students-viewing',
  templateUrl: './students-viewing.component.html',
  styleUrls: ['./students-viewing.component.css']
})
export class StudentsViewingComponent{
  @Input() childCourseList: Course[];

}
