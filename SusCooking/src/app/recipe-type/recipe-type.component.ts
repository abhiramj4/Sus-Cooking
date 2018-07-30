import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from '../recipe.service';
import {ProviderService} from '../provider.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-type',
  templateUrl: './recipe-type.component.html',
  styleUrls: ['./recipe-type.component.css']
})
export class RecipeTypeComponent implements OnInit {

  public recipeType;
  public recipes = [];
  public test = true;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
   ) {
      this.route.params.subscribe(params => this.recipeType = params);
    
      var x = this.recipeType;
   }

  ngOnInit() {

    this.route.data.pipe(map( data => data['recipes']))
        .subscribe(
          (recipes) =>{
            this.recipes = recipes;
          }
        );
      this.test = false;
  }

}
