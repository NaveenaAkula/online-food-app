import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialStylesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    CustomerHomeComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    CustomerAddComponent,
  ],
  exports: [
    CustomerDetailsComponent
  ]
})
export class CustomerModule { }
