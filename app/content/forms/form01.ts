import {Component} from "angular2/core";
// import {NgForm}    from 'angular2/common';

class Person {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}

@Component({
	selector: `form01`,
	template: `
		<h2>{{title}}</h2>
		
		<i class="material-icons">{{icon}}</i>
		<img [src]="imgUrl">
		<img bind-src="imgUrl">
		
		<button
			[style.fontSize.em]="isSpecial ? 3 : 1"
			(click)=" isSpecial=0; clickMessage=$event; log(); "
			>Big</button>
		
			<span [ngSwitch]="toeChoice">
			  <template [ngSwitchWhen]="'Eenie'">Eenie</template>
			  <template [ngSwitchWhen]="'Meanie'">Meanie</template>
			  <template [ngSwitchWhen]="'Miney'">Miney</template>
			  <template [ngSwitchWhen]="'Moe'">Moe</template>
			  <template ngSwitchDefault>Other</template>
			</span>
		
		<table>
		<tr><td [attr.colspan]="1 + 1">Three-Four</td></tr>
		</table>
		
		<div [textContent]="'The title is '+title"></div>
		
		<div [ngClass]="'special'">NgClass is special</div>
		<div class="special">NgClass is special</div>
		
		<div class="container" [hidden]="submitted">
		
	    <h3>Person Form</h3>
			
	    <form (ngSubmit)="onSubmit(personForm)" #personForm="ngForm">
				
	      <div class="form-group">
	        <label for="name">Name</label>
	        <input type="text" class="form-control" required
						[(ngModel)]="model.name"
						ngControl="name" #name="ngForm" #classspy >
					TODO: remove this: {{model.name}}
					<br>
					TODO: remove this: {{classspy.className}}
					
					<div [hidden]="name.valid" class="alert alert-danger">
					  Name is required
					</div>
	      </div>
				
	      <div class="form-group">
	        <label for="alterEgo">Alter Ego</label>
	        <input type="text" class="form-control"
						[(ngModel)]="model.alterEgo">
	      </div>
				
				<div class="form-group">
				  <label for="power">Hero Power</label>
				  <select class="form-control" required
						[(ngModel)]="model.power" >
				    <option *ngFor="#p of powers" [value]="p">{{p}}</option>
				  </select>
				</div>
				
	      <button type="submit" class="btn btn-default"
					[disabled]="!personForm.form.valid"
				>
					Submit
				</button>
				
	    </form>
			
		</div>
		
		<div [hidden]="!submitted">
	    <h2>You submitted the following:</h2>
	    <div class="row">
	      <div class="col-xs-3">Name</div>
	      <div class="col-xs-9  pull-left">{{ model.name }}</div>
	    </div>
	    <div class="row">
	      <div class="col-xs-3">Alter Ego</div>
	      <div class="col-xs-9 pull-left">{{ model.alterEgo }}</div>
	    </div>
	    <div class="row">
	      <div class="col-xs-3">Power</div>
	      <div class="col-xs-9 pull-left">{{ model.power }}</div>
	    </div>
	    <br>
	    <button class="btn btn-default" (click)="submitted=false">Edit</button>
	  </div>
		
	`,
	styles: [`
		.ng-valid[required] {
		  border-left: 5px solid #42A948; /* green */
		}
		.ng-invalid {
		  border-left: 5px solid #a94442; /* red */
		}
	`],
	directives: [
		
	],
})
export class Form01 {
	public title = "フォーム1: basic";
	
	toeChoice = "Miney";
	
	isSpecial = 1;
	
	public powers = ['Really Smart', 'Super Flexible',
					'Super Hot', 'Weather Changer'];
	public people = [];
	public model = new Person(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
	
	public imgUrl = "https://angular.io/resources/images/logos/standard/logo-nav@2x.png";
	public icon = `my_location`;
	
	submitted = false;
	
	log() {
		console.log( this );
	}
	
	ngModelChange() {
		console.log( "!!!!" );
	}
	onSubmit(f) {
		console.dir( f );
		this.submitted = true;
	}
	// 診断
	// get diagnostic() { return JSON.stringify(this.model); }
}
