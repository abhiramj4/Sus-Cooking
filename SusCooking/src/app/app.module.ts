import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './overhead/header/header.component';

import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BodyComponent } from './overhead/body/body.component';
import { LeftBodyComponent } from './overhead/body/left-body/left-body.component';
import { RightBodyComponent } from './overhead/body/right-body/right-body.component';
import { FooterComponent } from './overhead/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';

import { DrinksBodyComponent } from './overhead/drinks-body/drinks-body.component';
import { VegBodyComponent } from './overhead/veg-body/veg-body.component';
import { NonvegBodyComponent } from './overhead/nonveg-body/nonveg-body.component';
import { StartersBodyComponent } from './overhead/starters-body/starters-body.component';
import { StarterGalleryComponent } from './overhead/starters-body/starter-gallery/starter-gallery.component';


import { FormsModule }   from '@angular/forms';
import { RecipeFilterPipe } from './overhead/header/recipe-filter.pipe';
import { OverheadComponent } from './overhead/overhead.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LeftBodyComponent,
    RightBodyComponent,
    FooterComponent,
    DrinksBodyComponent,
    VegBodyComponent,
    NonvegBodyComponent,
    StartersBodyComponent,
    StarterGalleryComponent,
    RecipeFilterPipe,
    OverheadComponent,
 

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    CarouselModule.forRoot(),
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
