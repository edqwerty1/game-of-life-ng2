System.register(['angular2/core', './cell.component', './game-of-life.service'], function(exports_1, context_1) {
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
    var core_1, cell_component_1, game_of_life_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cell_component_1_1) {
                cell_component_1 = cell_component_1_1;
            },
            function (game_of_life_service_1_1) {
                game_of_life_service_1 = game_of_life_service_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(_gameOfLifeService) {
                    this._gameOfLifeService = _gameOfLifeService;
                    this.title = 'Game of Life!';
                    this.turnTime = 500;
                    this.input = [];
                    this.length = 10;
                    this.height = 5;
                }
                ;
                createGrid() {
                    this.input = [];
                    for (let i = 0; i < this.height; i++) {
                        this.input[i] = [];
                        for (let j = 0; j < this.length; j++) {
                            this.input[i][j] = { selected: Math.random() > 0.5 };
                        }
                    }
                }
                runGameOfLife() {
                    this.timeoutHandler = setInterval(() => {
                        this.input = this._gameOfLifeService.processGrid(this.input);
                    }, this.turnTime);
                }
                ;
                startGame() {
                    if (!this.timeoutHandler) {
                        console.log("start");
                        this.runGameOfLife();
                    }
                }
                ;
                stopGame() {
                    clearInterval(this.timeoutHandler);
                    this.timeoutHandler = null;
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: 'app/app.component.html',
                    styleUrls: ['app/app.component.css'],
                    directives: [cell_component_1.CellComponent],
                    providers: [
                        game_of_life_service_1.GameOfLifeService
                    ]
                }), 
                __metadata('design:paramtypes', [game_of_life_service_1.GameOfLifeService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map