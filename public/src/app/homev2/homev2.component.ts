import { Component, OnInit } from '@angular/core';
// import { setInterval } from '../../node_modules/timers-browsify';

@Component({
  selector: 'app-homev2',
  templateUrl: './homev2.component.html',
  styleUrls: ['./homev2.component.css']
})
export class Homev2Component implements OnInit {

  constructor() { }

  nameStr: String = "Jonathan Enriquez"

  profile: String = "none"

  email:String;

  idx = 9;

  interval;

  ngOnInit() {

  }

  abracadabra(){
    if (this.email == undefined) {
      this.email = "jonathanmenriquez@yahoo.com"
    } else {
      this.email = undefined;
    }
  }

  nameFocus(event) {
    // console.log(event);
    this.profile = "opaque"
  }

  lostFocus(event) {
    this.profile = "none"
  }
}
