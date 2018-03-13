import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  createNewMessage(messageObj) {
    return this._http.post('/api/message', messageObj);
  }
}
