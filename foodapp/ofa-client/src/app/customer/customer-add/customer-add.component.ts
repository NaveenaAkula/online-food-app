import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerDetials } from '../customer-details/customer-details.model';
import { CustomerAddService } from './customer-add.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private customerAddService: CustomerAddService) { }

  @Output() 
  goBack = new EventEmitter();

  ngOnInit() {
    this.customerFormGroup = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      id: new FormControl(),
      phone_number: new FormControl()
    });
  }

  customerFormGroup: FormGroup;

  saveCustomer(customer: CustomerDetials) {
    this.customerAddService.saveCustomer(customer)
      .subscribe(data => {console.log('customer add success, ', data); this.goBack.emit('customerDetails');}, error => {console.error('customer add error, ', error)});
  }

  cancel() {
    this.goBack.emit('customerDetails');
  }
 
}
