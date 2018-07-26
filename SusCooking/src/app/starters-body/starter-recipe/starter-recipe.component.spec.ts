import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterRecipeComponent } from './starter-recipe.component';

describe('StarterRecipeComponent', () => {
  let component: StarterRecipeComponent;
  let fixture: ComponentFixture<StarterRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
