System.register(["angular2/core", "./ngfor/ngfor01"], function(exports_1) {
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
    var core_1, ngfor01_1;
    var AppContentNgFor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ngfor01_1_1) {
                ngfor01_1 = ngfor01_1_1;
            }],
        execute: function() {
            AppContentNgFor = (function () {
                function AppContentNgFor() {
                }
                AppContentNgFor = __decorate([
                    core_1.Component({
                        selector: "app-content-ngfor",
                        template: "\n\t\t<h1>ngFor</h1>\n\t\t<ngfor01></ngfor01>\n\t",
                        directives: [
                            ngfor01_1.NgFor01
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppContentNgFor);
                return AppContentNgFor;
            }());
            exports_1("AppContentNgFor", AppContentNgFor);
        }
    }
});
//# sourceMappingURL=ngfor.js.map