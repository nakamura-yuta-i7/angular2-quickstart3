import {Component} from "angular2/core";
import {Form01} from "./forms/form01";

@Component({
	selector: `app-content-forms`,
	template: `
		<h1>Forms</h1>
		<form01></form01>
	`,
	styles: [`
		
	`],
	directives: [
		Form01,
	],
})
export class AppContentForms {
	
}
