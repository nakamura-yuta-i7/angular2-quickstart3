System.register(["angular2/core"], function(exports_1) {
    "use strict";
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
    var NgFor01, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgFor01 = (function () {
                function NgFor01() {
                    this.heroes = HEROES;
                }
                NgFor01 = __decorate([
                    core_1.Component({
                        selector: "ngfor01",
                        template: "\n\t\t<div *ngFor=\"#hero of heroes, #i=index\" [class.last]=\"last\">\n\t\t\t{{i + 1}} - {{ hero | json }}\n\t\t\t{{ hero.nickname }}\n\t\t</div>\n\t",
                        styles: ["\n\t"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgFor01);
                return NgFor01;
            }());
            exports_1("NgFor01", NgFor01);
            HEROES = [
                { fullName: "Yuta Nakamura", nickname: "yuta", },
                { fullName: "Puu Nakamura", nickname: "puu", },
                { fullName: "Pico Nakamura", },
            ];
        }
    }
});
//# sourceMappingURL=ngfor01.js.map