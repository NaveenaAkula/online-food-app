import { Injectable } from '@angular/core';
import { RestHeadersService } from 'src/app/rest-headers.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDetials } from './customer-details.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService{

  constructor(private httpClient: HttpClient, private restHeadersService: RestHeadersService) {
  }

  getCustomer(): Observable<CustomerDetials[]> {
    return this.httpClient.get<CustomerDetials[]>(environment.host + 'customer', this.restHeadersService.httpHeader);
  }
  
  getCustomerById(id: number): Observable<CustomerDetials> {
    return this.httpClient.get<CustomerDetials>(environment.host + 'customer/' + id, this.restHeadersService.httpHeader);
  }

  deleteCustomer(customer: CustomerDetials): Observable<any> {
    return this.httpClient.delete<any>(environment.host + 'customer/' + customer.id, this.restHeadersService.httpHeader);
  }
}
