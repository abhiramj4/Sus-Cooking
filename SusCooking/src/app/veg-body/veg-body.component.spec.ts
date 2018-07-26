import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegBodyComponent } from './veg-body.component';

describe('VegBodyComponent', () => {
  let component: VegBodyComponent;
  let fixture: ComponentFixture<VegBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
