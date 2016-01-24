import {Component} from 'angular2/core';
import {OnInit, OnChanges} from 'angular2/core';
import {Content01Form} from './01.form';

@Component({
  selector: 'content01',
  template: `
		<h2>コンテンツ01</h2>
		<p>
			<input
				*ngIf=" ! isShowForm "
				type="button"
				value="フォームを表示"
				(click)="showForm()"
			>
		</p>
		<content01-form *ngIf="isShowForm"></content01-form>
	`,
	directives: [
		Content01Form,
	],
	styles: [`
		:host {
			display: block;
		}
	`],
})
export class Content01 implements OnInit, OnChanges {
	ngOnInit() {
		this.showForm()
		console.log( "ngOnInit" );
  }
	ngOnChanges() {
		console.log( "on change detection!" );
	}
	public isShowForm = false;
	showForm() {
		this.isShowForm = true;
	}
}
