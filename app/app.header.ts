import {Component} from 'angular2/core';
import {AppSitename} from './app.sitename';
import {AppGlobalNav} from './app.global-nav';

@Component({
  selector: 'app-header',
  template: `
		<header>
			<app-sitename></app-sitename>
			<app-global-nav></app-global-nav>
		</header>
	`,
	directives: [
		AppSitename,
		AppGlobalNav,
	],
	styles: [`
		header {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			min-height: 100px;
			background: #000;
			color: #fff;
		}
	`],
})
export class AppHeader {
	
}
