import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { SuperUserHomeComponent } from './super-user-home.component';
import { CustomerModule } from '../customer/customer.module';
import { MenuModule } from '../menu/menu.module';
import { OrderModule } from '../order/order.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialStylesModule,
    CustomerModule,
    MenuModule,
    OrderModule,
  ],
  declarations: [
    SuperUserHomeComponent
  ],
  exports: [
    SuperUserHomeComponent
  ]
})
export class SuperUserHomeModule { }
