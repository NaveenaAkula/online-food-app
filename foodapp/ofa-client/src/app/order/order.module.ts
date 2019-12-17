import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { MaterialStylesModule } from '../material-styles/material-styles.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialStylesModule
  ],
  declarations: [OrderDetailsComponent, OrderEditComponent, OrderAddComponent],
  exports: [OrderDetailsComponent]
})
export class OrderModule { }
