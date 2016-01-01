import './app.scss';
//import '../node_modules/bootstrap/scss/bootstrap.scss';
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
import ResourcesComponent from "./resources.component";

const routes = [
	{path: '/', redirectTo: ['Home']},
	{path: '/home', component: HomeComponent, name: 'Home'},
	{path: '/me', component: MeComponent, name: 'Me'},
	{path: '/why', component: WhyComponent, name: 'Why'},
	{path: '/different', component: DifferentComponent, name: 'Different'},
	{path: '/project', component: CodeComponent, name: 'Project'},
	{path: '/resources', component: ResourcesComponent, name: 'Resources'}
];

@Component({
	selector: 'app',
	template: `
		<router-outlet></router-outlet>
		<button class="btn btn-primary" (click)="prev()" *ngIf="currentRoute > 1">Prev</button>
		<button class="btn btn-primary" (click)="next()" *ngIf="currentRoute < routeLength - 1">{{routeName()}}</button>
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
	}
	currentRoute = 1;
	routeLength = routes.length;
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
			return <Route>routes[this.currentRoute + 1].name || '';
		}
		return '';
	}
}

bootstrap(App, [
	ROUTER_PROVIDERS,
	PathLocationStrategy,
	provide(APP_BASE_HREF, {useValue: '/'})
]);