import { Component, OnInit } from '@angular/core';
// import { setInterval } from '../../node_modules/timers-browsify';

@Component({
  selector: 'app-homev2',
  templateUrl: './homev2.component.html',
  styleUrls: ['./homev2.component.css']
})
export class Homev2Component implements OnInit {

  constructor() { }

  nameStr:String = "Jonathan Enriquez"

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

  nameFocus(event, idx) {
    console.log(event);
    // this.interval = window.setInterval(this.typeName, 1000);
  }

  // typeName() {
  //   console.log('type name nameSTr', this.nameStr);
  //   var arr = this.nameStr.split('');
  //   console.log(arr);
  //   console.log(arr[this.idx]);
  //   arr[this.idx] = "_";
  //   this.idx++;
  //   this.nameStr = arr.join();
  //   console.log(this.nameStr, this.idx);
  // }

}
