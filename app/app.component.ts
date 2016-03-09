import { Component } from 'angular2/core';
import { CellComponent } from './cell.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [CellComponent]
})
export class AppComponent {
  title = 'Game of Life!';
  input:  boolean[][];
  constructor(){
      this.input = [];
      this.input[0] =  [true, true, false];
      this.input[1] =  [true, true, false];
      this.input[2] =  [true, true, false];

  }
         

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/