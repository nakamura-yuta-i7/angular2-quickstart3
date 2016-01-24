import {Component} from 'angular2/core';
import {OnInit, OnChanges} from 'angular2/core';

@Component({
  selector: 'content05',
  template: `
		<h2>{{title}}</h2>
		<input #box
		      (keyup.enter)="values=box.value"
		      (blur)="values=box.value">

		    <p>{{values}}</p>
	`,
	directives: [
		
	],
	styles: [`
		:host {
			display: block;
		}
	`],
})
export class Content05 {
	public title:string = "コンテンツ5 : enter & blur";
}
