import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';


@Component({
  selector: 'app-starters-body',
  templateUrl: './starters-body.component.html',
  styleUrls: ['./starters-body.component.css']
})
export class StartersBodyComponent implements OnInit {

  public recipes = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    
    console.log("Starters body has generated!")
    this.recipeService.getRecipes()
    .subscribe(data => this.recipes = data);
    
    
  }

}
