System.register(['angular2/core'], function(exports_1) {
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
    var Content06;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Content06 = (function () {
                function Content06() {
                    this.title = "コンテンツ6 : Put it all together";
                    this.heroes = ["yuta", "nakamura"];
                }
                Content06.prototype.addHero = function (newHero) {
                    this.heroes.push(newHero);
                };
                Content06 = __decorate([
                    core_1.Component({
                        selector: 'content06',
                        template: "\n\t\t<h2>{{title}}</h2>\n\t\t\n\t\t<input #newHero\n      (keyup.enter)=\"addHero(newHero.value)\"\n      (blur)=\"addHero(newHero.value); newHero.value='' \">\n\n    <button (click)=addHero(newHero.value)>Add</button>\n\n    <ul>\n\t\t\t<li *ngFor=\"#hero of heroes\">{{hero}}</li>\n\t\t</ul>\n\t",
                        directives: [],
                        styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Content06);
                return Content06;
            }());
            exports_1("Content06", Content06);
        }
    }
});
//# sourceMappingURL=06.js.map