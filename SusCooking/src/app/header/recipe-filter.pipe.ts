import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {

  transform(recipes: any, term: string): any {
    console.log(term);
    if(term === undefined) return recipes;
    
    console.log(recipes);

    /**
     * 
     
    for(var i = 0; i < recipes.length; i++){
      if(recipes[i].recipeName.toLowerCase().includes(term.toLocaleLowerCase())){
        console.log("Works");
      }
    }
    */

    
    return recipes.filter(function(recipe){
        return recipe.recipeName.toLowerCase().includes(term.toLocaleLowerCase());
    })
     
}

}
