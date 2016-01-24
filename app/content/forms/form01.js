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
    var Person, Form01;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import {NgForm}    from 'angular2/common';
            Person = (function () {
                function Person(id, name, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                }
                return Person;
            }());
            Form01 = (function () {
                function Form01() {
                    this.title = "フォーム1: basic";
                    this.toeChoice = "Miney";
                    this.isSpecial = 1;
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.people = [];
                    this.model = new Person(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.imgUrl = "https://angular.io/resources/images/logos/standard/logo-nav@2x.png";
                    this.icon = "my_location";
                    this.submitted = false;
                }
                Form01.prototype.log = function () {
                    console.log(this);
                };
                Form01.prototype.ngModelChange = function () {
                    console.log("!!!!");
                };
                Form01.prototype.onSubmit = function (f) {
                    console.dir(f);
                    this.submitted = true;
                };
                Form01 = __decorate([
                    core_1.Component({
                        selector: "form01",
                        template: "\n\t\t<h2>{{title}}</h2>\n\t\t\n\t\t<i class=\"material-icons\">{{icon}}</i>\n\t\t<img [src]=\"imgUrl\">\n\t\t<img bind-src=\"imgUrl\">\n\t\t\n\t\t<button\n\t\t\t[style.fontSize.em]=\"isSpecial ? 3 : 1\"\n\t\t\t(click)=\" isSpecial=0; clickMessage=$event; log(); \"\n\t\t\t>Big</button>\n\t\t\n\t\t\t<span [ngSwitch]=\"toeChoice\">\n\t\t\t  <template [ngSwitchWhen]=\"'Eenie'\">Eenie</template>\n\t\t\t  <template [ngSwitchWhen]=\"'Meanie'\">Meanie</template>\n\t\t\t  <template [ngSwitchWhen]=\"'Miney'\">Miney</template>\n\t\t\t  <template [ngSwitchWhen]=\"'Moe'\">Moe</template>\n\t\t\t  <template ngSwitchDefault>Other</template>\n\t\t\t</span>\n\t\t\n\t\t<table>\n\t\t<tr><td [attr.colspan]=\"1 + 1\">Three-Four</td></tr>\n\t\t</table>\n\t\t\n\t\t<div [textContent]=\"'The title is '+title\"></div>\n\t\t\n\t\t<div [ngClass]=\"'special'\">NgClass is special</div>\n\t\t<div class=\"special\">NgClass is special</div>\n\t\t\n\t\t<div class=\"container\" [hidden]=\"submitted\">\n\t\t\n\t    <h3>Person Form</h3>\n\t\t\t\n\t    <form (ngSubmit)=\"onSubmit(personForm)\" #personForm=\"ngForm\">\n\t\t\t\t\n\t      <div class=\"form-group\">\n\t        <label for=\"name\">Name</label>\n\t        <input type=\"text\" class=\"form-control\" required\n\t\t\t\t\t\t[(ngModel)]=\"model.name\"\n\t\t\t\t\t\tngControl=\"name\" #name=\"ngForm\" #classspy >\n\t\t\t\t\tTODO: remove this: {{model.name}}\n\t\t\t\t\t<br>\n\t\t\t\t\tTODO: remove this: {{classspy.className}}\n\t\t\t\t\t\n\t\t\t\t\t<div [hidden]=\"name.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t  Name is required\n\t\t\t\t\t</div>\n\t      </div>\n\t\t\t\t\n\t      <div class=\"form-group\">\n\t        <label for=\"alterEgo\">Alter Ego</label>\n\t        <input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t[(ngModel)]=\"model.alterEgo\">\n\t      </div>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label for=\"power\">Hero Power</label>\n\t\t\t\t  <select class=\"form-control\" required\n\t\t\t\t\t\t[(ngModel)]=\"model.power\" >\n\t\t\t\t    <option *ngFor=\"#p of powers\" [value]=\"p\">{{p}}</option>\n\t\t\t\t  </select>\n\t\t\t\t</div>\n\t\t\t\t\n\t      <button type=\"submit\" class=\"btn btn-default\"\n\t\t\t\t\t[disabled]=\"!personForm.form.valid\"\n\t\t\t\t>\n\t\t\t\t\tSubmit\n\t\t\t\t</button>\n\t\t\t\t\n\t    </form>\n\t\t\t\n\t\t</div>\n\t\t\n\t\t<div [hidden]=\"!submitted\">\n\t    <h2>You submitted the following:</h2>\n\t    <div class=\"row\">\n\t      <div class=\"col-xs-3\">Name</div>\n\t      <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\n\t    </div>\n\t    <div class=\"row\">\n\t      <div class=\"col-xs-3\">Alter Ego</div>\n\t      <div class=\"col-xs-9 pull-left\">{{ model.alterEgo }}</div>\n\t    </div>\n\t    <div class=\"row\">\n\t      <div class=\"col-xs-3\">Power</div>\n\t      <div class=\"col-xs-9 pull-left\">{{ model.power }}</div>\n\t    </div>\n\t    <br>\n\t    <button class=\"btn btn-default\" (click)=\"submitted=false\">Edit</button>\n\t  </div>\n\t\t\n\t",
                        styles: ["\n\t\t.ng-valid[required] {\n\t\t  border-left: 5px solid #42A948; /* green */\n\t\t}\n\t\t.ng-invalid {\n\t\t  border-left: 5px solid #a94442; /* red */\n\t\t}\n\t"],
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Form01);
                return Form01;
            }());
            exports_1("Form01", Form01);
        }
    }
});
//# sourceMappingURL=form01.js.map