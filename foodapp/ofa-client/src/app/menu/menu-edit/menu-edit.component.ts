import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MenuService } from '../menu.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuDetails } from '../menu-details/menu-details.model';


export interface FoodType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  @Output() 
  goBack = new EventEmitter();

  @Input()
  menuDetails: MenuDetails;

  foodTypes: FoodType[] = [
    {value: 'Appetizer', viewValue: 'Appetizer'},
    {value: 'Desserts', viewValue: 'Desserts'},
    {value: 'MainCourse', viewValue: 'Main Course'}
  ];

  ngOnInit() {
    this.menuFormGroup = new FormGroup({
      id: new FormControl(this.menuDetails.id),
      menu_name: new FormControl(this.menuDetails.menu_name),
      menu_type: new FormControl(this.menuDetails.menu_type),
      unit_price: new FormControl(this.menuDetails.unit_price)
    });
  }

  menuFormGroup: FormGroup;

  saveMenu(menu: MenuDetails) {
    this.menuService.editMenu(menu)
      .subscribe(data => {console.log('menu add success, ', data); this.goBack.emit('menuDetails');}, error => {console.error('customer add error, ', error)});
  }

  cancel() {
    this.goBack.emit('menuDetails');
  }


}
