import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() { }

  angularContent: String = "I learned the Angular framework as part of the third stack of my curriculum (MEAN Stack). This front-end of this site was built using Angular, include their Material components (in part). I look forward to continuing to work with the framework. "

  pythonContent: String = "After two weeks learning web fundamentals (HTML, CSS, JS, and JQuery), we in my cohort began our first stack. We learned the fundamentals of the language in week one. We then learned our first micro-framework: Flask. Following this, we learned how to our first database, MySQL, as well as SQLite as part of the Django. Along the way, we also learned how to use some tools that would help us accomplish with CRUD, including BCrypt, Regex, as well as the knowledge to building backend form validations. A passing grade of 8.0 or higher on the exam was required to advance to the second stack. Learning my first back-end frameworks was definitely a challenge, but I was able to pass with a perfect score."
  iOSContent: String = "Prior to the Dojo, I had learned some of the fundamentals of Swift through Udemy courses and YouTube videos. This proved to be helpful at the outset of the second stack. As of Thursday of our first week, we were split into groups of three to compete in a 24-hour hackathon. We were tasked with utilizing Core Motion in our app, so we built a Galaga-like game where the user controlled the ships using Yaw and fired by shaking it toward the target. We won the hackathon. The following Thursday, we again competed in a hackathon — this time using Core Location. We built a basic version of our interval-training running app, Runner’s H.I.I.E. and was fortunate to win that hackathon, as well. We again focused on CRUD operations for the exam, which I was able to pass with a perfect score."

  ngOnInit() {
  }

}
