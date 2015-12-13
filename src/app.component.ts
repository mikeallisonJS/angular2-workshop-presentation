import 'reflect-metadata';
import 'zone.js';
import {bootstrap} from 'angular2/bootstrap'
import {Component} from 'angular2/core';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

@Component({
	selector: 'app',
	template: `
		<div>
			Hello World
		</div>
		`
})
class App{
}

bootstrap(App);