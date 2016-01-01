import {Component} from "angular2/core";

@Component({
	selector: 'different',
	template: `
		<img class="center-block img-rounded" src="/images/sayno.jpg">
		<h3 class="display-3 text-md-center">Changes from Angular 1.x</h3>
		<p class="lead">
			No hockey stick learning curve<br />
			NO SCOPE!!!! HOORAY!<br />
			No angular.modules (uses es6 modules instead)<br />
			Less object types to learn (no more controller)<br />
		</p>
	`
})
export default class DifferentComponent{

}