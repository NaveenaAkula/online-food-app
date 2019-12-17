import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerDetials } from '../customer-details/customer-details.model';
import { CustomerEditService } from './customer-edit.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements  OnChanges, OnInit {

  @Input()
  customer: CustomerDetials;
  @Output() 
  goBack = new EventEmitter();

  customerFormGroup: FormGroup;

  constructor(private customerEditService:CustomerEditService) { }

  saveCustomer() {
    this.customerEditService.updateCustomer(this.customerFormGroup.value)
                            .subscribe(data => {console.log(data);
                                                this.goBack.emit('customerDetails');}
                                    , error => console.error(error)
                                  );
  }

  ngOnInit() {
  }

  cancel() {
    this.goBack.emit('customerDetails');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('customer Edit child ', this.customerFormGroup);
    this.customerFormGroup = new FormGroup({
      first_name: new FormControl(this.customer.first_name),
      last_name: new FormControl(this.customer.last_name),
      email: new FormControl(this.customer.email),
      id: new FormControl(this.customer.id),
      phone_number: new FormControl(this.customer.phone_number)
    });
  }

}
