import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestHeadersService } from '../rest-headers.service';
import { environment } from 'src/environments/environment.prod';
import { MenuDetails } from './menu-details/menu-details.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient,  private restHeadersService: RestHeadersService) { }

  getMenu(): Observable<MenuDetails[]> {
    return this.httpClient.get<any>(environment.host + 'menu', this.restHeadersService.httpHeader);
  }

  getMenuById(id: number): Observable<MenuDetails> {
    return this.httpClient.get<MenuDetails>(environment.host + 'menu/' + id + '/', this.restHeadersService.httpHeader);
  }

  addMenu(menu: MenuDetails): Observable<any> {
    let requestBody = {
      menu_name: menu.menu_name,
      menu_type: menu.menu_type,
      unit_price: menu.unit_price
    }
    return this.httpClient.post<any>(environment.host + 'menu', requestBody, this.restHeadersService.httpHeader)
  }

  editMenu(menu: MenuDetails): Observable<any> {
    let requestBody = {
      menu_name: menu.menu_name,
      menu_type: menu.menu_type,
      unit_price: menu.unit_price
    }
    let id = menu.id;
    return this.httpClient.put<any>(environment.host  + 'menu/' + id + '/', requestBody, this.restHeadersService.httpHeader)  
  }

  deleteMenu(menu: MenuDetails): Observable<any> {
    let id = menu.id
    return this.httpClient.delete<any>(environment.host + 'menu/' + id+ '/', this.restHeadersService.httpHeader)
  }
}

