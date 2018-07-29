import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-starters-body',
  templateUrl: './starters-body.component.html',
  styleUrls: ['./starters-body.component.css']
})
export class StartersBodyComponent implements OnInit {

  constructor( private providerService:ProviderService,
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
