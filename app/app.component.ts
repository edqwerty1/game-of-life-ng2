import { Component } from 'angular2/core';
import { CellComponent } from './cell.component';
import { GameOfLifeService } from './game-of-life.service';
import { Cell } from './cell';

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
  input:  Cell[][];
  length: number;
  height: number;
  turnTime: number = 500;
  timeoutHandler: any; 
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
            this.input[i][j] = {selected: Math.random() > 0.5 }
        } 
      }
  }
         
  runGameOfLife(){
      this.timeoutHandler = setInterval(() => {
          this.input = this._gameOfLifeService.processGrid(this.input); 
      }, this.turnTime)
  };
  
  startGame(){
      if (!this.timeoutHandler){
          console.log("start");
      this.runGameOfLife();
      }
  };
  
  stopGame(){
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
  }
  
}
