import {Component} from "angular2/core";

@Component({
	selector: 'code',
	template: `
		<div class="jumbotron">
			<h3 class="display-3">Code</h3>
			<p class="lead"><pre>git clone https://github.com/mikeallisonJS/angular2-workshop.git</pre></p>
			<p class="lead"><pre>npm install</pre></p>
		</div>
	`
})
export default class CodeComponent {

}