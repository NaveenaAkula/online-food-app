import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerDetials } from '../customer/customer-details/customer-details.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fullName = this.customer.first_name != undefined && this.customer.last_name != undefined ? `${this.customer.first_name} ${this.customer.last_name}`: "Customer";
  }

  @Input()
  customer: CustomerDetials;

  @Output()
  goLogin= new EventEmitter();

  display: string = 'User';
  fullName;

  openAppetizer(){
    this.display = 'Appetizer'
  }

  openMainCourse(){
    this.display = 'MainCourse'
  }

  openDeserts(){
    this.display = 'Desserts'
  }

  openHome() {
    this.display = 'User';
  }

  goBackLogin(){
    this.goLogin.emit();
  }
}
