import { Component } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

	sidebarURLs: any = [
		{
			name: "Dashboard",
			img: "./assets/images/dashboard.svg",
			url: '/dashboard'
		},
		{
			name: "Dashboard",
			img: "./assets/images/dashboard.svg",
			url: '/dashboard'
		},
		{
			name: "Dashboard",
			img: "./assets/images/dashboard.svg",
			url: '/dashboard'
		},
		{
			name: "Dashboard",
			img: "./assets/images/dashboard.svg",
			url: '/dashboard'
		},
		{
			name: "Dashboard",
			img: "./assets/images/dashboard.svg",
			url: '/dashboard'
		}
	]

}
