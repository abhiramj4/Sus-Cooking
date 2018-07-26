import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-body',
  templateUrl: './left-body.component.html',
  styleUrls: ['./left-body.component.css']
})
export class LeftBodyComponent implements OnInit {

  @Input() recipes;

  someStuff = "testing";
  constructor() { }

  ngOnInit() {
    //this.recipeoftheDay = texto;
  }

}
