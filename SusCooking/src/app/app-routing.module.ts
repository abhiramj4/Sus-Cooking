import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DrinksBodyComponent } from './drinks-body/drinks-body.component';
import { VegBodyComponent } from './veg-body/veg-body.component';
import { NonvegBodyComponent } from './nonveg-body/nonveg-body.component';
import { StartersBodyComponent } from './starters-body/starters-body.component';
import { BodyComponent } from './body/body.component';

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
   {path:'', component: BodyComponent,pathMatch:'full'},
   {path: 'starters', component: StartersBodyComponent},
   {path: 'drinks', component: DrinksBodyComponent},
   {path: 'veg', component:VegBodyComponent},
   {path: 'nonveg', component:NonvegBodyComponent},
   
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}