import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../recipe.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public recipes = [];
  public images = [];
  public text= "./assets/images/All/GrilledChickenSalad.jpg";
  
  showDropDown = false;
  //public testRecipes = [];
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
   this.recipeService.getRecipes()
        .subscribe(data => this.recipes = data);
  
      
  }

  public getRandomRecipe(): string{

    return "./assets/images/All/" + this.recipes[Math.floor(Math.random() * this.recipes.length)].recipeImage;

  }

  public toggleDropDown(){
    this.showDropDown = !this.showDropDown;
  }




 
  //to recieve data we need to subscribe to it
  
  
}
