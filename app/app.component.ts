import {Component} from 'angular2/core';
import {AppHeader} from './app.header';
import {AppLeftNav} from './app.left-nav';

import {AppContent} from './app.content';
import {AppContentForms} from './content/forms';
import {AppContentNgFor} from './content/ngfor';

import {AppFooter} from './app.footer';

@Component({
  selector: 'my-app',
  template: `
		<app-header></app-header>
		
		<!-- <app-left-nav></app-left-nav> -->
		
		<article>
			<app-content       *ngIf=" page=='/' "></app-content>
			<app-content-forms *ngIf=" page=='/forms' "></app-content-forms>
			<app-content-ngfor *ngIf=" page=='/ngfor' "></app-content-ngfor>
		</article>
		
		<app-footer></app-footer>
	`,
	directives: [
		AppHeader,
		AppLeftNav,
		AppContent,
		AppContentForms,
		AppContentNgFor,
		AppFooter,
	],
	styles: [`
		app-left-nav {
			float: left;
		}
	`],
})
export class AppComponent {
	public page = null;
	constructor() {
		this.page = location.pathname;
		console.log( "location.pathname", location.pathname );
		console.log( "location.search", location.search );
	}
}
