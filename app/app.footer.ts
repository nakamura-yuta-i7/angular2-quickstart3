import {Component} from 'angular2/core';

@Component({
    selector: 'app-footer',
    template: `
			<footer>
				footer
			</footer>
		`,
		styles: [`
			footer {
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100%;
				background: #000;
				color: #fff;
				font-weight: 900;
				padding: 10px;
			}
			
		`],
})
export class AppFooter {

}
