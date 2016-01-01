import {Component} from "angular2/core";

@Component({
	selector: 'Why',
	template: `
		<div class="jumbotron">
			<img class="center-block img-rounded" src="/images/beefcake.jpg" style="width:275px">
			<h3 class="display-3 text-md-center">Why Angular 2?</h3>
			<p class="lead">
				It's a total framework (build a car, not every component and the factory) <br />
				It's FAST! (Yep, faster than your framework, probably)<br />
				It's Modular (ES6 Modules, use it with anything else you like and easily)<br />
				It's Elegant (Less code = win) <br />
				It tastes and smells of javascript, not a highly abstracted framework<br />
				It's not like Angular 1!
			</p>
		</div>
	`
})
export default class WhyComponent{

}