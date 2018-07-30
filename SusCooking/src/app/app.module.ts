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

import { FormsModule }   from '@angular/forms';
import { RecipeFilterPipe } from './header/recipe-filter.pipe';

import { RecipeComponent } from './recipe/recipe.component';
import { RecipeTypeComponent } from './recipe-type/recipe-type.component';
import { CapitalizeFirstPipe } from './capitalizefirst.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LeftBodyComponent,
    RightBodyComponent,
    FooterComponent,
    RecipeFilterPipe,
    RecipeComponent,
    RecipeTypeComponent,
    CapitalizeFirstPipe,

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
