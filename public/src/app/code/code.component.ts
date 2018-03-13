import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() { }

  angularContent: String = "I learned the Angular framework as part of the third stack of my curriculum (MEAN Stack). This front-end of this site was built using Angular, include their Material components (in part). I look forward to continuing to work with the framework. "

  ngOnInit() {
  }

}
