import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'stylarKloth';
	isHeader: any = '';
	isSidebar: any = '';
	isFooter: any = '';
	
	constructor(public _route: Router,) {
		this._route.events.subscribe((event: any) => {
			if (event instanceof ActivationEnd) {
				if (event.snapshot.data && Object.keys(event.snapshot.data).length > 0) {
					if (event.snapshot.data['header'] >= 0) {
						this.isHeader = event.snapshot.data['header'];
						console.log('this.isHeader', this.isHeader)
					}
					if (event.snapshot.data['sidebar'] >= 0) {
						this.isSidebar = event.snapshot.data['sidebar'];
						console.log('this.isSidebar', this.isSidebar)
					}
					if (event.snapshot.data['footer'] >= 0) {
						this.isFooter = event.snapshot.data['footer'];
						console.log('this.isFooter', this.isFooter)
					}
				}
			}
		});
	}
}
