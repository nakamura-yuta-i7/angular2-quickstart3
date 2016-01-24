import {Component} from 'angular2/core';
import {OnInit, OnChanges} from 'angular2/core';

@Component({
  selector: 'content04',
  template: `
		<h2>{{title}}</h2>
		<input #box
			(keyup)="keyUp(box.value)"
		>
			
		<p>{{box.value}}</p>
	`,
	directives: [
		
	],
	styles: [`
		:host {
			display: block;
		}
	`],
})
export class Content04 {
	public title:string = "コンテンツ4 : keyUp & loopback value";
	keyUp(val) {
		console.log( val );
	}
}
