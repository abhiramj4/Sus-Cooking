import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../provider.service';

@Component({
  selector: 'app-starters-body',
  templateUrl: './starters-body.component.html',
  styleUrls: ['./starters-body.component.css']
})
export class StartersBodyComponent implements OnInit {

  constructor( private providerService:ProviderService) { }

  recipes = [];

  ngOnInit() {

    var x = this.providerService.getstoredRecipes()
    this.recipes = x;
  }

}
