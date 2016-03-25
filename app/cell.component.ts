import { Component } from 'angular2/core';

@Component({
  selector: 'cell',
  template: `
    <div><input type="checkbox" name="test" [(ngModel)]="selected.selected" >{{selected.selected}}</div>
  `,
  inputs: ['selected']
})
export class CellComponent {

}