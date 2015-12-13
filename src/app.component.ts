import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/bootstrap'
import {Component, provide} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, PathLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import HomeComponent from './home.component';

@Component({
	selector: 'app',
	template: `
		<router-outlet></router-outlet>
		`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/', redirectTo: ['Home']},
	{path: '/home', component: HomeComponent, name: 'Home'}
])
class App{
}

bootstrap(App, [
	ROUTER_PROVIDERS,
	PathLocationStrategy,
	provide(APP_BASE_HREF, {useValue: '/'})
]);