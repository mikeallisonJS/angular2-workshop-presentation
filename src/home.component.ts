import {Component} from "angular2/core";

@Component({
	selector: 'Home',
	template: `
		<div class="jumbotron">
			<img class="center-block" src="/images/AngularJS-Shield-huge.png" style="width:250px">
			<h3 class="display-3 text-md-center">Angular 2</h3>
			<p class="lead"><s>Google's apology letter for Angular 1</s></p>
			<p class="lead">An amazing framework, that's REALLY worth checking out</p>
		</div>
	`
})
export default class HomeComponent {

}