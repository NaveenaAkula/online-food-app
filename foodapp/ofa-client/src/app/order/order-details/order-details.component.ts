import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../order.service';
import { MatTableDataSource } from '@angular/material/table';
import { OrderDetails, fullOrderDetails } from './order-details.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomerDetailsService } from 'src/app/customer/customer-details/customer-details.service';
import { MenuService } from 'src/app/menu/menu.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private orderService: OrderService,
    private customerService: CustomerDetailsService,
    private menuService: MenuService) { }

  orderDetails: MatTableDataSource<fullOrderDetails>;
  fullOrderDetails: fullOrderDetails[] = [];
  displayedColumns: string[] = ['customer_name', 'customer_phone', 'menu_name', 'time_of_arrival', 'unit_size', 'total_price', 'actions'];
  // display: string = 'orderDetails';
  // order: OrderDetails;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log('================> OrderDetailsComponent ngOnInit')
    this.getOrder();
  }

  getOrder() {
    this.fullOrderDetails = [];
    this.orderService.getOrder().subscribe(
      data => {
        console.log('-----------------------> ', data)
        if(data.length > 0) {  
          data.forEach(order => {
            let fullOrder = {};
            fullOrder['unit_size'] = order.unit_size;
            fullOrder['id'] = order.id;
            fullOrder['time_of_arrival'] = order.time_of_arrival;
            fullOrder['orderType'] = order.orderType;
            this.getCustomerById(order.customer, order.menu, fullOrder);

          })      
        }
      },
      error => {
        console.log('something wrong went will making order get call')
      }
    )
  }

  getCustomerById(id: number, menuId: number, fullOrder) {
    this.customerService.getCustomerById(id).subscribe(data => {
      fullOrder['customer_name'] = data.first_name + ' ' + data.last_name;
      fullOrder['customer_phone'] = data.phone_number;
      this.getMenuById(menuId, fullOrder);
    }, error => {
      console.error('getCustomerById error ', error)
      this.getMenuById(menuId, fullOrder);
    })
  }

  getMenuById(id: number, fullOrder) {
    this.menuService.getMenuById(id).subscribe(data => {
      fullOrder['unit_price'] = data.unit_price;
      fullOrder['menu_name'] = data.menu_name;
      fullOrder['menu_type'] = data.menu_type;
      fullOrder['total_price'] = +data.unit_price * +fullOrder.unit_size;
      this.fullOrderDetails.push(fullOrder);
      console.log('check this out ', this.fullOrderDetails);
      this.orderDetails = new MatTableDataSource(Array.from(this.fullOrderDetails.values()));
      this.orderDetails.paginator = this.paginator;
      this.orderDetails.sort = this.sort;
    }, error => {
      console.error('getMenuById error ', error)
    })
  }

  ngAfterViewInit() {
    console.log('order details ng after view init');
    this.orderDetails.paginator = this.paginator;
    this.orderDetails.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.orderDetails.filter = filterValue.trim().toLowerCase();

    if (this.orderDetails.paginator) {
      this.orderDetails.paginator.firstPage();
    }
  }


  deleteOrder(order: OrderDetails) {
    this.orderService.deleteOrder(order.id).subscribe(data => {
      this.getOrder();
    }, error => {
      console.error('delete order ', error)
    })
  }

  // addOrder() {
  //   this.display = 'orderAdd';
  // }

  // open(display) {
  //   this.display = display;
  //   this.getOrder();
  // }

}
