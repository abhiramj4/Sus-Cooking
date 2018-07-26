import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterGalleryComponent } from './starter-gallery.component';

describe('StarterGalleryComponent', () => {
  let component: StarterGalleryComponent;
  let fixture: ComponentFixture<StarterGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
