import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() { }

  angularContent: String = "I learned the Angular framework as part of the third stack of my curriculum (MEAN). This website was built using Angular, including Angular Material and Materialize."

  ngOnInit() {
  }

}
