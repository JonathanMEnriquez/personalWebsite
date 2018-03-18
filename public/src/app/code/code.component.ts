import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() { }

  angularContent: String = "I learned the Angular framework as part of the third stack of my curriculum (MEAN Stack). This front-end of this site was built using Angular, including their Material components (in addition to using Materialize). What I most like about the framework is the structure that allows for multiple front-end contributors. The lightening of the burden on the server is also great."
  djangoContent: String = "I learned Django during the latter portion of my first stack (Python), in addition to learning to work with SQLite databases. I particularly enjoyed the Modeling portion of the MVC design. I did all of the Models (the Controllers just routed) and the Views for the admin portion of my first group project, which was a tongue-in-cheek pseudo-E-Commerce company to connect ill-prepared Coding Dojo students with experienced coders willing to take their Belt-Exams for them for a fee. Recently, I have joined some Meetup groups focusing on the computer-learning aspects of Python."
  iosContent: String = "The iOS stack was greatly enjoyable for me. Between the hackathons and the cool tools at my disposal, there were non-stop challenges. We won both of our hackathons, and I also had the chance to present a project using Apple's Multipeer Connectivity, which was great. Following the bootcamp, I have continued working on Runner's HIIE, which is a running interval training app (utilizing a Firebase DB) that we hope to submit for App Store approval in the coming weeks. I will also be working on a party-game app for the Apple Watch in the coming weeks, as well."
  materializeContent: String = "Materialize was not part of the coursework. It was a framework I decided to incorporate into this project. It does make doing the CSS simpler / more eye-popping and it will be a framework I use in future front-end projects."
  mongoContent: String = "MongoDB was the first NO-SQL database I encountered, as well as the last one taught during my team at the bootcamp. It served as the backend for this site for storage of the messages sent to me (see below)."
  nodeContent: String = "As part of the MEAN stack, I learned some of the node modules, primarily Express, Body-Parser and Mongoose. As part of the functionality of this site, I also learned how to incorporate NodeMailer. I very much enjoy how intuitive Node feels most of all. Next on the list is refactoring my code to make the server file as clean as possible."
  socketContent: String = "Sockets are really cool! It was something I first encountered during the MEAN stack and it is definitely a tool I am excited to keep using. In fact, one of the projects on the queue will incorporate it for real-time updates. Below is a little chat room made during my second day using socket.io."

  pythonContent: String = "After two weeks of learning web fundamentals (HTML, CSS, JS, and JQuery), my cohort began our first stack. We focused on learning the language during the first week. We then learned our first micro-framework: Flask. Following this, we learned how to use our first database, MySQL, as well as SQLite as part of the Django. Along the way, we also learned how to use some tools that would help us do CRUD, including BCrypt, Regex, as well as the knowledge to build backend form validations. A passing grade of 8.0 or higher on the exam was required to advance to the second stack. Learning my first back-end frameworks was definitely a challenge, but I was able to pass with a perfect score."
  iOSContent: String = "Prior to the Dojo, I had learned some of the fundamentals of Swift through Udemy courses and YouTube videos. This proved to be helpful at the outset of the second stack. As of Thursday of the first week, we were split into groups of three to compete in a 24-hour hackathon. We were tasked with utilizing Core Motion in our app, so we built a Galaga-like game where the user controlled the ships using Yaw and fired by shaking it toward the target. We won the hackathon. The following Thursday, we again competed in a hackathon — this time using Core Location. We built a basic version of our interval-training running app, Runner’s H.I.I.E., and were fortunate to win that hackathon, as well. We again focused on CRUD operations for the exam, which I was able to pass with a perfect score."
  meanContent: String = "The last of the stacks was MongoDB, Express, Angular, and Node. We began familiarizing ourselves with the intricacies of Javascript, as well as being introuced to TypeScript. During the second week, we began using Express.js, EJS to serve the HTML, and socket.io for some real-time applications. We also were introduced to MongoDB and Mongoose. The third week was dedicated to Angular and full MEAN applications. It was at the conclusion of the third week that were expected to be able to put together a full MEAN project with CRUD operations and deploy it on Amazon AWS in 4.5 hours. I was fortunate to again get a perfect score. The graduation class was 7 out of cohort which began with 20. It was the conclusion of a challenging and fun 14 weeks."

  ngOnInit() {
  }

}
