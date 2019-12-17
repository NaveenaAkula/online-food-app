import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialStylesModule } from '../material-styles/material-styles.module';
import { DialogComponent } from './dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialStylesModule,
    FormsModule,
  ],
  entryComponents: [DialogComponent],
  declarations: [DialogComponent,]
})
export class DialogModule { }
