import { Component } from 'angular2/core';
import { CellComponent } from './cell.component';
import { GameOfLifeService } from './game-of-life.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [CellComponent],
  providers: [
    GameOfLifeService
  ]
})
export class AppComponent {
  title = 'Game of Life!';
  input:  boolean[][];
  length: number;
  height: number;
  
  constructor(private _gameOfLifeService: GameOfLifeService){
      this.input = [];
      this.length = 10;
      this.height = 5;
  };
  
  createGrid(){
      this.input = [];
      for (let i = 0; i < this.height; i++){
          this.input[i] = [];
          for (let j = 0; j < this.length; j++){
            this.input[i][j] = Math.random() > 0.5;
        } 
      }
      this.input[0] =  [true, true, false];
      this.input[1] =  [true, true, false];
      this.input[2] =  [true, true, false];
  }
         
  runGameOfLife(){
      setTimeout(() => {
          console.log(this.input);
          this.input = this._gameOfLifeService.processGrid(this.input);
          console.log(this.input);
      }, 500)
  };
  
  startGame(){
      for(let i = 0; i< 50; i++ ){
          
      this.runGameOfLife();
      }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/