import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBodyComponent } from './right-body.component';

describe('RightBodyComponent', () => {
  let component: RightBodyComponent;
  let fixture: ComponentFixture<RightBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
