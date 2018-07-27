import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverheadComponent } from './overhead.component';

describe('OverheadComponent', () => {
  let component: OverheadComponent;
  let fixture: ComponentFixture<OverheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
