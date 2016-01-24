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
    var Content01Form;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Content01Form = (function () {
                function Content01Form() {
                    this.user_name = "Yuta Nakamura";
                    this.mail = "yuta.nakamura.i7@gmail.com";
                    this.submitted = false;
                }
                Content01Form.prototype.ngOnInit = function () {
                    console.log("ngOnInit");
                };
                Content01Form.prototype.ngOnChanges = function () {
                    console.log("on change detection!");
                };
                Content01Form.prototype.onSubmit = function (form) {
                    this.submitted = true;
                    console.dir(this);
                    console.log(form);
                };
                Content01Form = __decorate([
                    core_1.Component({
                        selector: 'content01-form',
                        template: "\n\t\t<h3>\u30B3\u30F3\u30C6\u30F3\u30C401. Form</h3>\n\t\t<form\n\t\t\t#form\n\t\t\t(submit)=\"onSubmit(form)\"\n\t\t\t>\n\t\t\t\n\t\t\t<label>\n\t\t\t\t<span>\u540D\u524D</span>\n\t\t\t\t<input type=\"text\" name=\"user_name\"\n\t\t\t\t\t[value]=\"user_name\"\n\t\t\t\t\tplaceholder=\"\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\">\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<span>\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9</span>\n\t\t\t\t<input type=\"text\" name=\"mail\"\n\t\t\t\t\t[value]=\"mail\" placeholder=\"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\">\n\t\t\t</label>\n\t\t\t<input\n\t\t\t\ttype=\"submit\" value=\"\u30ED\u30B0\u30A4\u30F3\"\n\t\t\t\t[disabled]=\"0\">\n\t\t\t\n\t\t</form>\n\t",
                        styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t\th3 {\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t}\n\t\tform {\n\t\t\tpadding: 5px;\n\t\t}\n\t\tform span { display: block; }\n\t\tform label {\n\t\t\tdisplay: block;\n\t\t}\n\t\tform [type=submit] {\n\t\t\tmargin-top: 1em;\n\t\t}\n\t"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Content01Form);
                return Content01Form;
            }());
            exports_1("Content01Form", Content01Form);
        }
    }
});
//# sourceMappingURL=01.form.js.map