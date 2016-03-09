import { Component } from 'angular2/core';

@Component({
  selector: 'cell',
  template: `
    <div><input value={{selected}} type="checkbox" name="test" [(ngModel)]="selected"></div>
  `,
  inputs: ['selected']
})
export class CellComponent {

}