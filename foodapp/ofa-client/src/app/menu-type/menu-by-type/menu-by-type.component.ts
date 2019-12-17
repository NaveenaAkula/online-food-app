import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MenuService } from 'src/app/menu/menu.service';
import { MatTableDataSource } from '@angular/material/table';
import { MenuDetails } from 'src/app/menu/menu-details/menu-details.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-menu-by-type',
  templateUrl: './menu-by-type.component.html',
  styleUrls: ['./menu-by-type.component.css']
})
export class MenuByTypeComponent implements OnInit {

  constructor(private menuService: MenuService) {}

   @Input()
  type: string;

  @Input()
  customer;

  @Output() 
  goBackHome = new EventEmitter();

  menuDetails: MatTableDataSource<MenuDetails>;
  displayedColumns: string[] = ['name', 'price', 'actions'];
  display: string = 'menuById';
  menu: MenuDetails;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log('================> MenuDetailsComponent ngOnInit')
    this.getMenu();
  }

  ngAfterViewInit() {
    console.log('menu by type ng after view init', this.type);
    this.menuDetails.paginator = this.paginator;
    this.menuDetails.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.menuDetails.filter = filterValue.trim().toLowerCase();

    if (this.menuDetails.paginator) {
      this.menuDetails.paginator.firstPage();
    }
  }

  getMenu() {
    this.menuService.getMenu().subscribe(
      data => {
        if(data.length > 0) {
          let menu: MenuDetails[] = data.filter(menu => {
                                        console.log(menu.menu_type, this.type);
                                        return menu.menu_type == this.type
                                      });
          console.log('menu data ', menu);
          this.menuDetails = new MatTableDataSource(Array.from(menu.values()));
          this.menuDetails.paginator = this.paginator;
          this.menuDetails.sort = this.sort;   
        }
      }, error => {
        console.error('getMenu has failed, ',error);
      }
    )
  }

  addOrder(menu) {
    this.display = 'addOrder'
    this.menu = menu;
  }

  goBack(event) {
    console.log(event)
    if(event === 'userHome') {
      this.goBackHome.emit('User')
    }else {
      this.display = 'menuById'
    }
  }

}
