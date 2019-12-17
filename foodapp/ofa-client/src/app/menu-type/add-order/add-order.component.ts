import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerDetials } from 'src/app/customer/customer-details/customer-details.model';
import { MenuDetails } from 'src/app/menu/menu-details/menu-details.model';
import { OrderService } from 'src/app/order/order.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

export interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private orderService: OrderService,
    private dialog: MatDialog) { }

  @Output() 
  goBack = new EventEmitter();

  @Input()
  menu: MenuDetails;

  @Input()
  customer: CustomerDetials;

  orderTypes: Select[] = [
    {value: 'take out', viewValue: 'take out'},
    {value: 'dine in', viewValue: 'dine in'}
  ];

  fullName;

  quantities: Select[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'}
  ];

  ngOnInit() {
    this.fullName = `${this.customer.first_name} ${this.customer.last_name}`;
    console.log(this.menu);
    console.log('===============custmoer=================', this.customer);
    this.orderFormGroup = new FormGroup({
      name: new FormControl({value: this.fullName, disabled: true}),
      menu: new FormControl({value: this.menu.menu_name, disabled: true}),
      orderType: new FormControl(),
      quantity: new FormControl(),
      timeOfArriaval: new FormControl()
    });
  }

  orderFormGroup: FormGroup;

  addOrder(orderDetails: customerOrder) {
  let date =  new Date();
  let arrivalTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}T${orderDetails.timeOfArriaval}:00Z`;
   console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}T${orderDetails.timeOfArriaval}:00Z`);
   this.orderService.addOrder(orderDetails.orderType, arrivalTime, orderDetails.quantity, this.customer.id, this.menu.id).subscribe(data => {
    console.log('add order is successful, ', data);
    this.openDialog('Your order has been successfully submitted!');
   }, error => {
     console.log('add order failed, ', error);
     this.openDialog('Sorry! there is a technical error at our end.');
   })
    // this.customerAddService.saveCustomer(customer)
    //   .subscribe(data => {console.log('customer add success, ', data); this.goBack.emit('customerDetails');}, error => {console.error('customer add error, ', error)});
  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30rem',
      data: {name: this.fullName, message: message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.event);
      if(result.event === 'Ok') {
        this.goBack.emit('userHome');
      }
    });
  }

  cancel() {
    this.goBack.emit('menuById');
  }

}

export interface customerOrder{
  orderType: string;
  quantity: string;
  timeOfArriaval: string;
}
