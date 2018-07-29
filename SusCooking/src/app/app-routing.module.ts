import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DrinksBodyComponent } from './drinks-body/drinks-body.component';
import { VegBodyComponent } from './veg-body/veg-body.component';
import { NonvegBodyComponent } from './nonveg-body/nonveg-body.component';
import { StartersBodyComponent } from './starters-body/starters-body.component';
import { BodyComponent } from './body/body.component';

import{ProviderService} from './provider.service';
//import{RecipeService} from './recipe.service';

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
   {
     path: 'starters', 
     component: StartersBodyComponent,
     resolve:{
       recipes:ProviderService
     }
    },
   {path: 'drinks', component: DrinksBodyComponent,resolve:{recipes:ProviderService
  }},
   {path: 'veg', component:VegBodyComponent,resolve:{recipes:ProviderService
  }},
   {path: 'nonveg', component:NonvegBodyComponent,resolve:{recipes:ProviderService
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