import {Component} from "angular2/core";

@Component({
	selector: 'different',
	template: `
		<div class="jumbotron">
			<h3 class="display-3">Changes from Angular 1.x</h3>
			<p class="lead">
				No hockey stick learning curve<br />
				NO SCOPE!!!! HOORAY!<br />
				No angular.modules (uses es6 modules instead)<br />
				Less object types to learn (no more controller)<br />
			</p>
		</div>
	`
})
export default class DifferentComponent{

}