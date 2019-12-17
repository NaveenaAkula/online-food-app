import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialStylesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [MenuDetailsComponent, MenuEditComponent, MenuAddComponent],
  exports: [MenuDetailsComponent]
})
export class MenuModule { }
