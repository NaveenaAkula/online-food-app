import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../menu.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuDetails } from '../menu-details/menu-details.model';

export interface Select {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  @Output() 
  goBack = new EventEmitter();

  menuTypes: Select[] = [
    {value:'Appetizer', viewValue: 'Appetizers'},
    {value:'MainCourse', viewValue: 'Main Course'},
    {value:'Desserts', viewValue: 'Desserts'}
  ];

  ngOnInit() {
    this.menuFormGroup = new FormGroup({
      menu_name: new FormControl(),
      menu_type: new FormControl(),
      unit_price: new FormControl()
    });
  }

  menuFormGroup: FormGroup;

  saveMenu(menu: MenuDetails) {
    this.menuService.addMenu(menu)
      .subscribe(data => {console.log('menu add success, ', data); this.goBack.emit('menuDetails');}, error => {console.error('customer add error, ', error)});
  }

  cancel() {
    this.goBack.emit('menuDetails');
  }

}
