import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  aboutContent = [
    "My coding journey began in June of 2017. I began to learn Swift using Udemy courses. By September, I realized that I wanted this to be my career. I attended Coding Dojo from November till March, 2018. I can now safely say that I love coding!",
    "Received my B.A. in Psychology and I worked in Social Work for the past 8 years. Working with lower-income older adults made me realize the importance of familiarity with modern technologies to avoid social isolation. This is what sparked my desire to go into this field to help address others' social needs.",
    "As you probably have already guessed, I'm a huge basketball fan. I try to get on the court at least twice a week, while I still can. I also catch as many Lakers games as I can. Other than that, I love just relaxing and watching TV with my wife Laura. (We got married by a lake -- hence, the gif)",
  ]

  ngOnInit() {
  }

}
