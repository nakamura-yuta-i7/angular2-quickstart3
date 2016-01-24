import {Component} from 'angular2/core';

import {Content01} from './content/01';
import {Content02} from './content/02';
import {Content03} from './content/03';
import {Content04} from './content/04';
import {Content05} from './content/05';
import {Content06} from './content/06';


@Component({
  selector: 'app-content',
  template: `
		<section>
			<content01></content01>
		</section>
		<section>
			<content02></content02>
		</section>
		<section>
			<content03></content03>
		</section>
		<section>
			<content04></content04>
		</section>
		<section>
			<content05></content05>
		</section>
		<section>
			<content06></content06>
		</section>
	`,
	directives: [
		Content01,
		Content02,
		Content03,
		Content04,
		Content05,
		Content06,
	],
	styles: [`
		section {
			padding: 10px;
			margin-bottom: 1em;
		}
	`],
})
export class AppContent {
	
}
