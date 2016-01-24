System.register(['angular2/core', './01.form'], function(exports_1) {
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
    var core_1, _01_form_1;
    var Content01;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_01_form_1_1) {
                _01_form_1 = _01_form_1_1;
            }],
        execute: function() {
            Content01 = (function () {
                function Content01() {
                    this.isShowForm = false;
                }
                Content01.prototype.ngOnInit = function () {
                    this.showForm();
                    console.log("ngOnInit");
                };
                Content01.prototype.ngOnChanges = function () {
                    console.log("on change detection!");
                };
                Content01.prototype.showForm = function () {
                    this.isShowForm = true;
                };
                Content01 = __decorate([
                    core_1.Component({
                        selector: 'content01',
                        template: "\n\t\t<h2>\u30B3\u30F3\u30C6\u30F3\u30C401</h2>\n\t\t<p>\n\t\t\t<input\n\t\t\t\t*ngIf=\" ! isShowForm \"\n\t\t\t\ttype=\"button\"\n\t\t\t\tvalue=\"\u30D5\u30A9\u30FC\u30E0\u3092\u8868\u793A\"\n\t\t\t\t(click)=\"showForm()\"\n\t\t\t>\n\t\t</p>\n\t\t<content01-form *ngIf=\"isShowForm\"></content01-form>\n\t",
                        directives: [
                            _01_form_1.Content01Form,
                        ],
                        styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Content01);
                return Content01;
            }());
            exports_1("Content01", Content01);
        }
    }
});
//# sourceMappingURL=01.js.map