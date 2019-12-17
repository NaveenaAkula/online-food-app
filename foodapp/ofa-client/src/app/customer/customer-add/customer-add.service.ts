import { Injectable } from '@angular/core';
import { RestHeadersService } from 'src/app/rest-headers.service';
import { CustomerDetials } from '../customer-details/customer-details.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddService {

  constructor(private restHeaderService: RestHeadersService, private httpClient: HttpClient) { }

    saveCustomer(customer: CustomerDetials): Observable<any> {
    let requestBody = {
      email: customer.email,
      first_name: customer.first_name,
      last_name: customer.last_name,
      phone_number: customer.phone_number
    }

    return this.httpClient.post<any>(environment.host + 'customer', requestBody, this.restHeaderService.httpHeader);
  }
}
