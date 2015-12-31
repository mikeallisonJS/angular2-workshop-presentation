import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/bootstrap'
import {Component, provide} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, PathLocationStrategy, APP_BASE_HREF, Router, Location} from 'angular2/router';
import HomeComponent from './home.component';
import MeComponent from "./me.component";
import WhyComponent from "./why.component";
import DifferentComponent from './different.component';
import CodeComponent from "./code.component";

const routes = [
	{path: '/', redirectTo: ['Home']},
	{path: '/home', component: HomeComponent, name: 'Home'},
	{path: '/me', component: MeComponent, name: 'Me'},
	{path: '/why', component: WhyComponent, name: 'Why'},
	{path: '/different', component: DifferentComponent, name: 'Different'},
	{path: '/code', component: CodeComponent, name: 'Code'}
];

@Component({
	selector: 'app',
	template: `
		<router-outlet></router-outlet>
		<button class="btn" (click)="prev()">Prev</button>
		<button class="btn btn-default" (click)="next()">{{routeName()}}</button>
		`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(routes)
class App {
	constructor(public router: Router, location: Location) {
		let found = false;
		while (!found && this.currentRoute < routes.length) {
			if (location.path() !== routes[this.currentRoute].path) {
				this.currentRoute++;
			} else {
				found = true;
			}
		}
		console.log(this.currentRoute);
	}

	currentRoute = 1;
	prev() {
		if (this.currentRoute > 1) {
			this.currentRoute--;
		}
		this.router.navigateByUrl(routes[this.currentRoute].path);
	}
	next() {
		this.currentRoute++;
		this.router.navigateByUrl(routes[this.currentRoute].path);
	}
	routeName() {
		if (this.currentRoute + 1 < routes.length) {
			return routes[this.currentRoute + 1].name || '';
		}
		return '';
	}
}

bootstrap(App, [
	ROUTER_PROVIDERS,
	PathLocationStrategy,
	provide(APP_BASE_HREF, {useValue: '/'})
]);