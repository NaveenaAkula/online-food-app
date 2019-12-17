import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestHeadersService } from '../rest-headers.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderDetails } from './order-details/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient,  private restHeadersService: RestHeadersService ) { }

  getOrder(): Observable<OrderDetails[]> {
    return this.httpClient.get<OrderDetails[]>(environment.host + 'order', this.restHeadersService.httpHeader);
 }
 addOrder(orderType, timeOfArrival, unitSize, customerID: number, menuID: number): Observable<any> {
  let requestBody= {
      "orderType": orderType,
      "time_of_arrival": timeOfArrival,
      "unit_size": unitSize,
      "customer": customerID,
      "menu": menuID

  };
  return this.httpClient.post<any>(environment.host + 'order', requestBody, this.restHeadersService.httpHeader)
}
editOrder(menu: OrderDetails): Observable<any> {
  let requestBody;
  let id = menu.id;
  return this.httpClient.put<any>(environment.host  + 'order/' + id + '/', requestBody, this.restHeadersService.httpHeader)  
}

  deleteOrder(id: number): Observable<any> {
    return this.httpClient.delete<any>(environment.host + 'order/' + id + '/', this.restHeadersService.httpHeader)
  }


}



