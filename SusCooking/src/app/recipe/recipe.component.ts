import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from '../recipe.service';
import { map } from 'rxjs/operators';
import{aRecipe} from '../recipe';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  
})
export class RecipeComponent implements OnInit {

  public recipeNumber;
  public selectedRecipe:aRecipe;
  public recipes = [];
  public recipeHTML = "../../assets/PepperChicken.html";
  recipeurlLoaded: Promise<boolean>;

  
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
        this.recipeHTML = this.loadHTML(this.selectedRecipe);
        this.recipeurlLoaded = Promise.resolve(true);
  }

  private findCorrectRecipe(recipeID):aRecipe{

    for(var i = 0; i < this.recipes.length; i++){
      if(this.recipes[i].recipeId === recipeID){
        return this.recipes[i];
      }
    }
  }

  public loadHTML(recipe:aRecipe):string{

    //dynamic loading of HTML
    //just fix it so that the innerHTML string is fluent and the right one
    //also add "recipeHTML":"" to ALL recipes in recipes.json

    var returnString = "../../assets/" + recipe.recipeHTML;
    return returnString
  }
}

  