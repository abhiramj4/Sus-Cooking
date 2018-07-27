import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../recipe.service';
//import {Router} from '../../app/';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public recipes = [];
  public images = [];
  public text= "./assets/images/All/GrilledChickenSalad.jpg";
  //public recipesLoaded: Promise<boolean>; //declaring a promise
  //public testRecipes = [];
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
   this.recipeService.getRecipes()
        .subscribe(data => this.recipes = data);
    console.log( 'This is the recipes ' + this.recipes);
    //var testStuff = this.recipes;
    
    
  }



 
  //to recieve data we need to subscribe to it
}
