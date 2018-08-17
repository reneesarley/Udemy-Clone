import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { StudentsViewingComponent } from './students-viewing/students-viewing.component';


@NgModule({
  declarations: [
    AppComponent,
    TopCategoriesComponent,
    StudentsViewingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
