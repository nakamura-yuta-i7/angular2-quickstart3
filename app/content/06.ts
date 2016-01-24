import {Component} from 'angular2/core';
import {OnInit, OnChanges} from 'angular2/core';

@Component({
  selector: 'content06',
  template: `
		<h2>{{title}}</h2>
		
		<input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)=addHero(newHero.value)>Add</button>

    <ul>
			<li *ngFor="#hero of heroes">{{hero}}</li>
		</ul>
	`,
	directives: [
		
	],
	styles: [`
		:host {
			display: block;
		}
	`],
})
export class Content06 {
	public title:string = "コンテンツ6 : Put it all together";
	public heroes:any = ["yuta","nakamura"];
	addHero(newHero) {
		this.heroes.push(newHero)
	}
}
