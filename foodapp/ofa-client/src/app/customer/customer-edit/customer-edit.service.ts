import { Injectable } from '@angular/core';
import { RestHeadersService } from 'src/app/rest-headers.service';
import { CustomerDetials } from '../customer-details/customer-details.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CustomerEditService {

  constructor(private restHeaderService: RestHeadersService, private httpClient: HttpClient) { }

  updateCustomer(customer: CustomerDetials): Observable<any> {
    let requestBody = {
      email: customer.email,
      first_name: customer.first_name,
      last_name: customer.last_name,
      id: customer.id,
      phone_number: customer.phone_number
    }

    return this.httpClient.put<any>(environment.host + 'customer/' + customer.id + '/', requestBody, this.restHeaderService.httpHeader);
  }
}
