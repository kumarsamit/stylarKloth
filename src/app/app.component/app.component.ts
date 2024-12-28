import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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

	constructor(public _route: Router,
		private titleService: Title,
		private metaService: Meta
	) {
		this._route.events.subscribe((event: any) => {
			if (event instanceof ActivationEnd) {
				if (event.snapshot.data && Object.keys(event.snapshot.data).length > 0) {
					if (event.snapshot.data['header'] >= 0) {
						this.isHeader = event.snapshot.data['header'];
					}
					if (event.snapshot.data['sidebar'] >= 0) {
						this.isSidebar = event.snapshot.data['sidebar'];
					}
					if (event.snapshot.data['footer'] >= 0) {
						this.isFooter = event.snapshot.data['footer'];
					}
					if(event.snapshot.data['meta']){
						let { title, description, keyword } = event.snapshot?.data['meta'];
						if (title) {
							this.titleService.setTitle(title);
						}
						if (description) {
							this.metaService.updateTag({ name: 'description', content: description });
						}
						if (keyword) {
							this.metaService.updateTag({ name: 'keywords', content: keyword });
						}
					}
				}
			}
		});
	}
}
