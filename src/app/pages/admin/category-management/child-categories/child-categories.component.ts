import { Component } from '@angular/core';

@Component({
	selector: 'app-child-categories',
	templateUrl: './child-categories.component.html',
	styleUrls: ['./child-categories.component.scss']
})
export class ChildCategoriesComponent {
	loader:boolean = false;

	list: any = [
		{
			categoryHeading: "Styles for Everyone",
			img: "",
		},
		{
			categoryHeading: "Clothing for Every Season",
			img: "",
		},
		{
			categoryHeading: "Clothing for Every Season",
			img: "",
		},
		{
			categoryHeading: "Clothing for Every Season",
			img: "",
		}

	]



	back() {
		history.back();
	}


}
