import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';

import{ProviderService} from './provider.service';


import { RecipeComponent } from './recipe/recipe.component';

import { RecipeTypeComponent } from './recipe-type/recipe-type.component';
/**
 * Routes tell the router which view to display 
 * when a user clicks a link or pastes a URL into 
 * browser address
 * 
 * Routes has two properties; path (string that matches the url)
 * Component; Component that the router should create when navigating to this
 * route
 */

 const routes: Routes = [
   {
     path:'', 
     component: BodyComponent,
     pathMatch:'full',
     resolve:{recipes:ProviderService
     }
    },
  {path: 'recipe/:id', component:RecipeComponent,resolve:{recipes:ProviderService
  }},
  {path: 'recipeType/:type', component:RecipeTypeComponent,resolve:{recipes:ProviderService
  }},
  
   
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [

    ProviderService
    
  ]
})
export class AppRoutingModule {}