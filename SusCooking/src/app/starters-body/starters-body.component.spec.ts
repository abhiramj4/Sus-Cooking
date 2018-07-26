import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartersBodyComponent } from './starters-body.component';

describe('StartersBodyComponent', () => {
  let component: StartersBodyComponent;
  let fixture: ComponentFixture<StartersBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartersBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartersBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
