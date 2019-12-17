import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { MenuTypeModule } from '../menu-type/menu-type.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialStylesModule,
    ReactiveFormsModule,
    FormsModule,
    MenuTypeModule
  ],
  declarations: [UserHomeComponent],
  exports:[UserHomeComponent]
})
export class UserHomeModule { }
