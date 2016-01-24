import { Component } from "angular2/core";


@Component({
	selector: `ngfor01`,
	template: `
		<div *ngFor="#hero of heroes, #i=index" [class.last]="last">
			{{i + 1}} - {{ hero | json }}
			{{ hero.nickname }}
		</div>
	`,
	styles: [`
	`],
	
})
export class NgFor01 {
	heroes = HEROES;
}

var HEROES = [
	{ fullName: "Yuta Nakamura", nickname: "yuta", },
	{ fullName: "Puu Nakamura", nickname: "puu", },
	{ fullName: "Pico Nakamura", },
];
