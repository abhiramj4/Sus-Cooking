import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegBodyComponent } from './nonveg-body.component';

describe('NonvegBodyComponent', () => {
  let component: NonvegBodyComponent;
  let fixture: ComponentFixture<NonvegBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonvegBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
