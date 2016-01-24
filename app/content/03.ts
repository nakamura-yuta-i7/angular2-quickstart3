import {Component} from 'angular2/core';
import {OnInit, OnChanges} from 'angular2/core';

@Component({
  selector: 'content03',
  template: `
		<h2>{{title}}</h2>
		<div>
			<input (keyup)="onKey($event)" >
		</div>
		<div>
			{{value}}
		</div>
	`,
	directives: [
		
	],
	styles: [`
		:host {
			display: block;
		}
	`],
})
export class Content03 {
	public title:string = "コンテンツ3: keyUp";
	public value:string;
	onKey(event:any) {
		this.value = event.target.value;
	}
}
