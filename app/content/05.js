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
    var Content05;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Content05 = (function () {
                function Content05() {
                    this.title = "コンテンツ5 : enter & blur";
                }
                Content05 = __decorate([
                    core_1.Component({
                        selector: 'content05',
                        template: "\n\t\t<h2>{{title}}</h2>\n\t\t<input #box\n\t\t      (keyup.enter)=\"values=box.value\"\n\t\t      (blur)=\"values=box.value\">\n\n\t\t    <p>{{values}}</p>\n\t",
                        directives: [],
                        styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Content05);
                return Content05;
            }());
            exports_1("Content05", Content05);
        }
    }
});
//# sourceMappingURL=05.js.map