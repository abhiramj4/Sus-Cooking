import { TestBed, inject } from '@angular/core/testing';

import { RandomRecipeService } from './random-recipe.service';

describe('RandomRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomRecipeService]
    });
  });

  it('should be created', inject([RandomRecipeService], (service: RandomRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
