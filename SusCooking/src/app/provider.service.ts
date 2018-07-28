import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {RecipeService} from '../app/recipe.service';
import { aRecipe } from './recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProviderService implements Resolve<aRecipe[]>{

  public data;

  constructor(private recipeService:RecipeService) {

    }
  
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<aRecipe[]>{

    //when angular router needs to resolve data
    //using a router, it calls resolve()
    //IF this returns an observable - it will wait
    //until it activates the routes component

    //the recipe serviec handles all communication with the backend
    //this service fetches recipes in the resolve()
    //returns an observable of the type aRecipe[] so 
    //the angular router will wait for the observable to complete 
    //before the route's component is activated
    console.log(this.recipeService.getRecipes());
    return this.recipeService.getRecipes();
  }
  

}


