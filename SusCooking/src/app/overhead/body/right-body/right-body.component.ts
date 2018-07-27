import { Component, OnInit, Input } from '@angular/core';
import { aRecipe } from '../../../recipe';

@Component({
  selector: 'app-right-body',
  templateUrl: './right-body.component.html',
  styleUrls: ['./right-body.component.css']
})

export class RightBodyComponent implements OnInit{

  public images = [];
  
  public image1;
  public image2;
  public image3;

  @Input() recipes;

  constructor() { }

  
  ngOnInit() {

    this.image1 = this.getRandomRecipe(this.recipes);
    console.log('This is the image ' + this.image1);
    console.log('This is the recipe ' + this.recipes);
    this.image2 = this.getRandomRecipe(this.recipes);
    this.image3 = this.getRandomRecipe(this.recipes);
    
  }

  public getRandomRecipe(recipes:aRecipe[]): aRecipe{

    var x = Math.floor(Math.random() * recipes.length);
    var randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    //var testing = "../../../assets/images/All/" + recipes[Math.floor(Math.random() * recipes.length)].recipeImage;
    return randomRecipe; //this is an OBJECT
  }


}
