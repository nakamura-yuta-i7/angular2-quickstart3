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
    var Content02;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Content02 = (function () {
                function Content02() {
                    this.title = "コンテンツ2: clickEvent";
                    this.clickCount = 0;
                }
                Content02.prototype.onClickMe = function () {
                    this.clickCount++;
                    this.clickMessage = this.clickCount + " \u56DE\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3057\u305F\u3002";
                };
                Content02 = __decorate([
                    core_1.Component({
                        selector: 'content02',
                        template: "\n\t\t<h2>{{title}}</h2>\n\t\t<p>\n\t\t\t<button (click)=\"onClickMe()\">Click me!</button>\n\t\t</p>\n\t\t<p>\n\t\t\t{{clickMessage}}\n\t\t</p>\n\t",
                        directives: [],
                        styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Content02);
                return Content02;
            }());
            exports_1("Content02", Content02);
        }
    }
});
//# sourceMappingURL=02.js.map