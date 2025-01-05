import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { CreateCategoryComponent } from './create-category/create-category.component';


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

	constructor(
		private _request: RequestService,
		private dialog: MatDialog,
		private _snackbar: SnackbarService,
		private _router: Router,
	) {

	}


	createCategory() {
		let obj: any = {
			heading: 'Create Category',
		}
		const dialogRef = this.dialog.open(CreateCategoryComponent, {
			width: '600px',
			maxWidth: '90vw',
			data: obj
		});

		dialogRef.afterClosed().subscribe((result: any) => {
			if (result === 'confirm') {
				console.log('result', result)
			}
		});
	}


}