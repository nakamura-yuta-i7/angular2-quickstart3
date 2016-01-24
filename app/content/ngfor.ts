import { Component } from "angular2/core";
import { NgFor01 } from "ngfor/ngfor01";

@Component({
	selector: `app-content-ngfor`,
	template: `
		<h1>ngFor</h1>
		<ngfor01></ngfor01>
	`,
	directives: [
		NgFor01
	],
})
export class AppContentNgFor {
	
}
