import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestHeadersService {

  constructor() { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };;

  setHttpHeaders(jwt) {
    this.httpHeader =  {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "JWT " + jwt
      })
    }
  }
}
