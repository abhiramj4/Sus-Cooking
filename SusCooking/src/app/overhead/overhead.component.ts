import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ProviderService} from '../provider.service';

@Component({
  selector: 'app-overhead',
  templateUrl: './overhead.component.html',
  styleUrls: ['./overhead.component.css']
})
export class OverheadComponent implements OnInit {

  constructor(private recipeService: RecipeService, private providerService:ProviderService) { }

  recipes = [];
  storedRecipes = false;

  ngOnInit() {

  }

}
