import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { aRecipe } from './recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private http: HttpClient){}
 
  private recipeUrl: string = "./assets/recipe.json"; //json file

  getRecipes(): Observable<aRecipe[]>{
    //console.log(this.http.get<aRecipe[]>(this.recipeUrl));
    return this.http.get<aRecipe[]>(this.recipeUrl); //this is an array
    
    //note that this returns an observable
    //need to cast this as an array


  }
}
