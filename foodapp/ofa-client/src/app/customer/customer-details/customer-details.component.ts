import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerDetailsService } from './customer-details.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomerDetials } from './customer-details.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private customerDetailsService: CustomerDetailsService) { }

  customerDetails: MatTableDataSource<CustomerDetials>;
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'phone_number', 'actions'];
  display: string = 'customerDetails';
  customer: CustomerDetials;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log('================> CustomerDetailsComponent ngOnInit')
    this.getCustomers();
  }

  getCustomers() {
    this.customerDetailsService.getCustomer().subscribe(
      data => {
        if(data.length > 0) {  
          console.log('customer data ', data);
          this.customerDetails = new MatTableDataSource(Array.from(data.values()));
          this.customerDetails.paginator = this.paginator;
          this.customerDetails.sort = this.sort;      
        }
      },
      error => {
        console.log('something wrong went will making customer get call')
      }
    )
  }

  ngAfterViewInit() {
    console.log('customer details ng after view init');
    this.customerDetails.paginator = this.paginator;
    this.customerDetails.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.customerDetails.filter = filterValue.trim().toLowerCase();

    if (this.customerDetails.paginator) {
      this.customerDetails.paginator.firstPage();
    }
  }

  editCustomer(customer: CustomerDetials) {
    console.log('edit customer');
    this.display = 'customerEdit';
    this.customer = customer;
  }

  deleteCustomer(customer: CustomerDetials) {
    this.customerDetailsService.deleteCustomer(customer).subscribe(data => {
      this.getCustomers();
    }, error => {
      console.error('delete Customer ', error)
    })
  }

  addCustomer() {
    this.display = 'customerAdd';
  }

  open(display) {
    this.display = display;
    this.getCustomers();
  }
  

}