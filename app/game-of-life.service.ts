import { Injectable } from 'angular2/core';

@Injectable()
export class GameOfLifeService {

    processGrid(grid: boolean[][]) {
        var output: boolean[][] = [];


        for (var rowIndex in grid) {
            output[rowIndex] = [];
            for (var index in grid[rowIndex]) {
                var numberOfNeighbours = this.countNeighours(grid, index, rowIndex);

                if (this.checkAlive(grid, index, rowIndex)) {
                    if (numberOfNeighbours >= 2 && numberOfNeighbours < 4) {
                        output[rowIndex][index] = true;
                    } else {
                        output[rowIndex][index] = false;
                    }
                } else {
                    if (numberOfNeighbours === 3) {
                        output[rowIndex][index] = true;
                    } else {
                        output[rowIndex][index] = false;
                    }
                }
            }

        };

        return output;
    };

    private countNeighours(grid: boolean[][], x: any, y: any) {
        var numberOfNeighbours = 0;

        numberOfNeighbours += this.checkAlive(grid, +x - 1, +y - 1) ? 1 : 0;
        numberOfNeighbours += this.checkAlive(grid, +x - 1, +y) ? 1 : 0;
        numberOfNeighbours += this.checkAlive(grid, +x - 1, +y + 1) ? 1 : 0;
        numberOfNeighbours += this.checkAlive(grid, +x, +y - 1) ? 1 : 0;
        numberOfNeighbours += this.checkAlive(grid, +x, +y + 1) ? 1 : 0;
        numberOfNeighbours += this.checkAlive(grid, +x + 1, +y - 1) ? 1 : 0;
        numberOfNeighbours += this.checkAlive(grid, +x + 1, +y) ? 1 : 0;
        numberOfNeighbours += this.checkAlive(grid, +x + 1, +y + 1) ? 1 : 0;

        return numberOfNeighbours;
    };

    private checkAlive(grid: boolean[][], x: any, y: any) {
        if (((x >= 0) && (y >= 0)) && (y < grid.length) && (x < grid[y].length)) {
            return grid[y][x] === true;
        } else {
            return false;
        }
    }

}