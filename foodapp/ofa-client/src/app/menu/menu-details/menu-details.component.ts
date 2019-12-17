import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../menu.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MenuDetails } from './menu-details.model';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  menuDetails: MatTableDataSource<MenuDetails>;
  displayedColumns: string[] = ['name', 'type', 'price', 'actions'];
  display: string = 'menuDetails';
  menu: MenuDetails;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log('================> MenuDetailsComponent ngOnInit')
    this.getMenu();
  }

  getMenu() {
    this.menuService.getMenu().subscribe(
      data => {
        if(data.length > 0) {  
          console.log('menu data ', data);
          this.menuDetails = new MatTableDataSource(Array.from(data.values()));
          this.menuDetails.paginator = this.paginator;
          this.menuDetails.sort = this.sort;      
        }
      },
      error => {
        console.log('something wrong went will making menu get call')
      }
    )
  }

  ngAfterViewInit() {
    console.log('menu details ng after view init');
    this.menuDetails.paginator = this.paginator;
    this.menuDetails.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.menuDetails.filter = filterValue.trim().toLowerCase();

    if (this.menuDetails.paginator) {
      this.menuDetails.paginator.firstPage();
    }
  }

  editMenu(menu: MenuDetails) {
    console.log('edit menu');
    this.display = 'menuEdit';
    this.menu = menu;
  }

  deleteMenu(menu: MenuDetails) {
    console.log(menu)
    this.menuService.deleteMenu(menu).subscribe(data => {
      this.getMenu();
    }, error => {
      console.error('delete Menu ', error)  
    })
  }

  addMenu() {
    this.display = 'menuAdd';
  }

  open(display) {
    this.display = display;
    this.getMenu();
  }

}
