import {Component} from "angular2/core";

@Component({
	selector: 'project',
	template: `
		<div class="jumbotron">
			<h3 class="display-3">Code</h3>
			<p class="lead">git clone https://github.com/mikeallisonJS/angular2-workshop.git</p>
			<p class="lead">npm install</p>
		</div>
	`
})
export default class CodeComponent {

}