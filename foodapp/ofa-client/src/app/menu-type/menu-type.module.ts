import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuByTypeComponent } from './menu-by-type/menu-by-type.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialStylesModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
  ],
  declarations: [MenuByTypeComponent, AddOrderComponent],
  exports: [ MenuByTypeComponent]
})
export class MenuTypeModule { }
