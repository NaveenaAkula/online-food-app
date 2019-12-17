import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CustomerDetials } from '../customer/customer-details/customer-details.model';

@Component({
  selector: 'app-super-user-home',
  templateUrl: './super-user-home.component.html',
  styleUrls: ['./super-user-home.component.css']
})
export class SuperUserHomeComponent implements OnInit {

  constructor() { }

  display: string = 'SuperUser';
  fullName;

  ngOnInit() {
    this.fullName = this.customer.first_name && this.customer.last_name ? `${this.customer.first_name} ${this.customer.last_name}`: "Customer";
  }

  @Input()
  customer: CustomerDetials

  @Output()
  goLogin = new EventEmitter();


  openCustomer() {
    this.display = 'Customer';
  }

  openMenu() {
    this.display = 'Menu';
  }

  openOrder() {
    this.display = 'Order';
  }

  openHome() {
    this.display = 'SuperUser';
  }

  goBackLogin(){
    this.goLogin.emit();
  }

}
