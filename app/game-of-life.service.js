System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var GameOfLifeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let GameOfLifeService = class GameOfLifeService {
                processGrid(grid) {
                    var output = [];
                    for (var rowIndex in grid) {
                        output[rowIndex] = [];
                        for (var index in grid[rowIndex]) {
                            var numberOfNeighbours = this.countNeighours(grid, index, rowIndex);
                            if (this.checkAlive(grid, index, rowIndex)) {
                                if (numberOfNeighbours >= 2 && numberOfNeighbours < 4) {
                                    output[rowIndex][index] = true;
                                }
                                else {
                                    output[rowIndex][index] = false;
                                }
                            }
                            else {
                                if (numberOfNeighbours === 3) {
                                    output[rowIndex][index] = true;
                                }
                                else {
                                    output[rowIndex][index] = false;
                                }
                            }
                        }
                    }
                    ;
                    return output;
                }
                ;
                countNeighours(grid, x, y) {
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
                }
                ;
                checkAlive(grid, x, y) {
                    if (((x >= 0) && (y >= 0)) && (y < grid.length) && (x < grid[y].length)) {
                        return grid[y][x] === true;
                    }
                    else {
                        return false;
                    }
                }
            };
            GameOfLifeService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], GameOfLifeService);
            exports_1("GameOfLifeService", GameOfLifeService);
        }
    }
});
//# sourceMappingURL=game-of-life.service.js.map