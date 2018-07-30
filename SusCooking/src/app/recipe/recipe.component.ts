import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from '../recipe.service';
import {ProviderService} from '../provider.service';
import { map } from 'rxjs/operators';
import{aRecipe} from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipeNumber;
  public selectedRecipe:aRecipe;
  public recipes = [];
  

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,) { 
      this.route.params.subscribe(params => this.recipeNumber = params);
      var y = this.recipeNumber.id;
    }

  ngOnInit() {

    this.route.data.pipe(map( data => data['recipes']))
        .subscribe(
          (recipes) =>{
            this.recipes = recipes;
          }
        );
    
        this.selectedRecipe = this.findCorrectRecipe(this.recipeNumber.id);
  }

  private findCorrectRecipe(recipeID):aRecipe{

    for(var i = 0; i < this.recipes.length; i++){
      if(this.recipes[i].recipeId === recipeID){
        return this.recipes[i];
      }
    }
  }
}

  