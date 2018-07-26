import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BodyComponent } from './body/body.component';
import { LeftBodyComponent } from './body/left-body/left-body.component';
import { RightBodyComponent } from './body/right-body/right-body.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';

import { DrinksBodyComponent } from './drinks-body/drinks-body.component';
import { VegBodyComponent } from './veg-body/veg-body.component';
import { NonvegBodyComponent } from './nonveg-body/nonveg-body.component';
import { StartersBodyComponent } from './starters-body/starters-body.component';
import { StarterGalleryComponent } from './starters-body/starter-gallery/starter-gallery.component';

import { FormsModule }   from '@angular/forms';
import { RecipeFilterPipe } from './header/recipe-filter.pipe';




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
