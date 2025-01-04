import { Component } from '@angular/core';

@Component({
	selector: 'app-category-management',
	templateUrl: './category-management.component.html',
	styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent {


	loader: boolean = false;
	displayedColumns: string[] = ['Category Id', 'Category Name', 'Child Category', 'Actions'];
	userList: any = [
		{ position: 1, name: 'Clothing for Every Season', child: 5 },
		{ position: 2, name: 'Styles for Everyone', child: 4 },
		{ position: 3, name: 'Explore Clothing by Style', child: 6 },
	];


}