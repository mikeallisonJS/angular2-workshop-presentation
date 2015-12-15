import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/bootstrap'
import {Component, provide} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, PathLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import HomeComponent from './home.component';
import MeComponent from "./me.component";
import WhyComponent from "./why.component";
import DifferentComponent from './different.component';
import CodeComponent from "./code.component";

@Component({
	selector: 'app',
	template: `
		<router-outlet></router-outlet>
		`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/', redirectTo: ['Home']},
	{path: '/home', component: HomeComponent, name: 'Home'},
	{path: '/me', component: MeComponent, name: 'Me'},
	{path: '/why', component: WhyComponent, name: 'Why'},
	{path: '/different', component: DifferentComponent, name: 'Different'},
	{path: '/code', component: CodeComponent, name: 'Code'}
])
class App{
}

bootstrap(App, [
	ROUTER_PROVIDERS,
	PathLocationStrategy,
	provide(APP_BASE_HREF, {useValue: '/'})
]);