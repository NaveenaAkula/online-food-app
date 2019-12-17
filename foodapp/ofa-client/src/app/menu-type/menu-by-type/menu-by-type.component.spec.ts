import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuByTypeComponent } from './menu-by-type.component';

describe('MenuByTypeComponent', () => {
  let component: MenuByTypeComponent;
  let fixture: ComponentFixture<MenuByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
