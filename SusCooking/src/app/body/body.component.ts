import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ProviderService} from '../provider.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public recipes = [];
  public images = [];
  public text= "./assets/images/All/GrilledChickenSalad.jpg";

  
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   
    this.route.data.pipe(map( data => data['recipes']))
        .subscribe(
          (recipes) =>{
            this.recipes = recipes;
          }
        );

    var x = this.recipes;

  }



 
  //to recieve data we need to subscribe to it
}
