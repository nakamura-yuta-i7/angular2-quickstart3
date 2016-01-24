import {Component} from 'angular2/core';

@Component({
    selector: 'app-sitename',
    template: `
			<h1>
				<a href="/">
					<i class="material-icons">security</i>
					Angular Demo
				</a>
			</h1>
		`,
		styles: [`
			h1 {
				display: inline-block;
				padding: 0;
				margin: 0;
			}
			a {
				display: block;
				padding: 10px;
				color: #fff;
				font-size: 24px;
				text-decoration: none;
			}
			a i {
				font-size: 30px;
				vertical-align: sub;
			}
		`]
})
export class AppSitename {

}
