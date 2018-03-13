import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  email: FormControl
  message: FormControl
  success: String

  constructor(private _apiService: ApiService) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.message = new FormControl('', Validators.required);
   }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Please enter a value' : this.email.hasError('email') ? 'Not a valid email address' : "";
  }

  getError() {
    return this.message.hasError('required') ? 'Please enter a message' : "";
  }

  ngOnInit() {
  }

  newMessage() {
    console.log('new message');
    let newObj = {
      email: this.email,
      message: this.message
    }
    let observable = this._apiService.createNewMessage(newObj);
    observable.subscribe((responseData: any) => {
      if (responseData.message == "Success") {
        this.success = "Thank you for your message. I will respond as promptly as possible."
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.message = new FormControl('', Validators.required);
      }
    })
  }

}
