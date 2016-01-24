import {Component} from 'angular2/core';
import {OnInit, OnChanges} from 'angular2/core';

@Component({
  selector: 'content02',
  template: `
		<h2>{{title}}</h2>
		<p>
			<button (click)="onClickMe()">Click me!</button>
		</p>
		<p>
			{{clickMessage}}
		</p>
	`,
	directives: [
		
	],
	styles: [`
		:host {
			display: block;
		}
	`],
})
export class Content02 {
	public title:string = "コンテンツ2: clickEvent";
	constructor() {
	}
	public clickMessage:string;
	public clickCount:number = 0;
	onClickMe() {
		this.clickCount++;
		this.clickMessage = `${this.clickCount} 回クリックしました。`;
	}
}
