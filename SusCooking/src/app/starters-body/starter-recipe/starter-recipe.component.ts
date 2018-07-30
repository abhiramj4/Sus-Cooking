import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../provider.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-starter-recipe',
  templateUrl: './starter-recipe.component.html',
  styleUrls: ['./starter-recipe.component.css']
})
export class StarterRecipeComponent implements OnInit {

  constructor(private providerService:ProviderService,
    private route: ActivatedRoute) { }

  recipes = [];

  ngOnInit() {
    this.route.data.pipe(map( data => data['recipes']))
    .subscribe(
      (recipes) =>{
        this.recipes = recipes;
      }
    );
  }

}
