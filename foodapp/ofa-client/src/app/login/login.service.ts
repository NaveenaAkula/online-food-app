import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomerDetials } from '../customer/customer-details/customer-details.model';
import { RestHeadersService } from '../rest-headers.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private restHeadersService: RestHeadersService) {
  }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  readonly createUserhttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic aW5zdHJ1Y3RvcjptYXZlcmljazFh'
    })
  };


  login(userName: any, password: any): Observable<jwtResponse> {
    let responseBody
    let requestBody = {
        "username": userName,
        "password": password
      }
    return this.httpClient.post<jwtResponse>(environment.host + 'api-token-auth/', requestBody, this.httpOptions);
  }

  getCustomerByUserId(userId):Observable<CustomerDetials> {
    return this.httpClient.get<CustomerDetials>(environment.host + 'customerById/' + userId, this.restHeadersService.httpHeader);
  }

  getCustomer():Observable<CustomerDetials[]> {
    return this.httpClient.get<CustomerDetials[]>(environment.host + 'customer', this.restHeadersService.httpHeader);
  }

  createUser(password: string, userName: string, firstName: string, lastName: string, email: string): Observable<user[]> {
    let requestBody = {
      "password": password,
      "last_login": null,
      "is_superuser": false,
      "username": userName,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "is_staff": true,
      "is_active": true,
      "groups": [],
      "user_permissions": []
  }
  return this.httpClient.post<user[]>(environment.host + 'proxy', requestBody, this.createUserhttpOptions);
  }

  createCustomer(email, firstName, lastName, phone, user): Observable<any> {
    let requestBody = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      user: user
    }

    return this.httpClient.post<any>(environment.host + 'customer', requestBody, this.createUserhttpOptions);
  }

}

export class jwtResponse {
  token: string;
}

export interface user { 
  id:number;
  password:string;
  last_login:null;
  is_superuser:boolean;
  username:string;
  first_name:string;
  last_name:string;
  email:string;
  is_staff:false;
  is_active:true;
  date_joined:string;
  groups:any[];
  user_permissions:any[];
}