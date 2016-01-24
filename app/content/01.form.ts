import {Component} from 'angular2/core';
import {OnInit, OnChanges} from 'angular2/core';
import {NgForm}    from 'angular2/common';

@Component({
  selector: 'content01-form',
  template: `
		<h3>コンテンツ01. Form</h3>
		<form
			#form
			(submit)="onSubmit(form)"
			>
			
			<label>
				<span>名前</span>
				<input type="text" name="user_name"
					[value]="user_name"
					placeholder="名前を入力してください">
			</label>
			<label>
				<span>メールアドレス</span>
				<input type="text" name="mail"
					[value]="mail" placeholder="メールアドレスを入力してください。">
			</label>
			<input
				type="submit" value="ログイン"
				[disabled]="0">
			
		</form>
	`,
	styles: [`
		:host {
			display: block;
		}
		h3 {
			padding: 0;
			margin: 0;
		}
		form {
			padding: 5px;
		}
		form span { display: block; }
		form label {
			display: block;
		}
		form [type=submit] {
			margin-top: 1em;
		}
	`],
})
export class Content01Form implements OnInit, OnChanges {
	public user_name = "Yuta Nakamura";
	public mail = "yuta.nakamura.i7@gmail.com";
	public submitted = false;
	ngOnInit() {
		console.log( "ngOnInit" );
  }
	ngOnChanges() {
		console.log( "on change detection!" );
	}
	onSubmit(form) {
		this.submitted = true;
		console.dir( this );
		console.log( form );
	}
}
