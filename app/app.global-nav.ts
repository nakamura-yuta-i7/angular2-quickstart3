import {Component} from 'angular2/core';

@Component({
  selector: 'app-global-nav',
  template: `
		<nav>
			<ul>
				<li><a href="/">User Input</a></li>
				<li><a href="/forms">Forms</a></li>
				<li><a href="/ngfor">ngFor</a></li>
			</ul>
		</nav>
	`,
	styles: [`
		ul {
			position: fixed;
			right: 0;
			top: 40;
		}
		li {
			display: inline-block;
			
		}
		a {
			display: block;
			padding: 15px;
			background: #efefef;
		}
		a:hover {
			background: #000;
			color: #fff;
		}
	`],
})
export class AppGlobalNav {
	
}
