## Specs
### MVP Week One
#### User Stories
* _A user should be able to see the same nav bar on every page/view (the nav bar will have no functionality at this time)_
* _A user should be able to view the Top Categories, which include Development, Business, IT and Software, Design, Marketing, Personal Development, Photography, Music, Language, Health and Fitness, Office Productivity and Lifestyle_
* _A user should be able to see a "Students are Viewing" row which will include course cards for random courses_
* _A user should be able to get basic details about the course from the course card, including course name, instructor(s), star rating (in the form of a number, not graphic), number of reviews for course, original cost with a strikethrough and current cost_
* _A user should be able to see a "discovery" row which will include the course cards for random courses within a specific category. The default category will be Development_
* _A user should be able to select a different category for the discovery row. The options are Development, Design, Business, IT & Software, Personal Development, Marketing and Photography_
* _A user should be able to click on any course card and go to the course details page_

#### Specs
* _All course data will be hard coded._
* _There will only be 10 courses_
* _All courses will be in the category of either Development or Design._
* _The course details page will include the details that are on the course card and lorem ipsum, there will be very little styling_
* _There will be a course class with: category, course name, instructor(s), star rating, number of reviews for course, original cost with a strikethrough and current cost, course description_
* _There will be a category class_
* _Home page features that will NOT be included: sale banner at top, nav bar functionality, "streamer" div, "how udemy works" div, "What our students are saying" section and everything below that div_

### MVP Week Two
* _All course data should be stored in a database_
* _Course data will include_
* _All category data will be stored in a database_
* _A user should be able to see an image for each course on the course card_
* _Add categories dropdown to nav bar. It will only include main categories, no sub categories_
* _Utilize services and routing_

### Additional Goals
* _Utilize the Udemy API_
* _Include all available course information on the course details page (see https://www.udemy.com/developers/affiliate/models/course/ for course information)_
* _Include all available categories_
* _A user should see additional details about a course when they hover over the course card_
