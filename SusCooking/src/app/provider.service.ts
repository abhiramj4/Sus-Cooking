import { Injectable } from '@angular/core';
import {RecipeService} from '../app/recipe.service';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {

  public data;
  constructor(public service:RecipeService) {
    this.service.getRecipes().subscribe(value =>{
      this.data = value;
    });
   }

  public getData(){
    return this,this.data;
  }
}
