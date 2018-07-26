import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksBodyComponent } from './drinks-body.component';

describe('DrinksBodyComponent', () => {
  let component: DrinksBodyComponent;
  let fixture: ComponentFixture<DrinksBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
