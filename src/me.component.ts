import {Component} from "angular2/core";

@Component({
	selector: 'me',
	template: `
		<img class="center-block img-rounded" src="/images/me.jpg">
		<h3 class="display-3 text-md-center">Mike Allison</h3>
		<p class="lead">
			Professionally: Developer since 2000 (Mainly Javascript/C# Full-Stack in Education/Medical)<br />
			Really: Developing since I got my hands on a Commodore 64 & Apple IIe at the age of 6.<br />
			Currently contracting for Compass Learning creating Pathblazer 2.0, a K-12 Fountational Invervention Platform
		</p>
		<p class="lead">
			Personally: Mega-Nerd! <br />
			I'm a lover of all things Sci-fi/Fantasy/Super Hero... <br />
			Seriously, I can't get enough of a good book, series or movie <br />
			Also, love a good MMO (Yep, still playing warcraft)<br />
			Electronic Music is a huge pastime, anything from EU DNB to chicago house<br />
			General Anxiety Disorder (no, I'm not standoffish on purpose)<br />
			And no, I don't know anything about sportsball teams, sorry
		</p>
	`
})
export default class MeComponent{

}