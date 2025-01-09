import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ADMIN_DELETE_PRODUCT_API, ADMIN_GET_PRODUCT_LIST } from '@env/api.path';
import { ConfirmationPopupComponent } from 'src/app/common-components/confirmation-popup/confirmation-popup.component';


@Component({
	selector: 'app-category-management',
	templateUrl: './category-management.component.html',
	styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent {

	categoryList: any = [];
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

	getCategories() {
		let requestedData = {};
		this.loader = true;
		this._request.GET(ADMIN_GET_PRODUCT_LIST, requestedData).subscribe({
			next: (resp: any) => {
				this.categoryList = resp.data;
				this.loader = false;
			}, error: (err: any) => {
				this.loader = false;
				this._snackbar.notify(err.message, 2)

			}
		})
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

		deleteProduct(categoryObj:any){
			let obj:any = {
				heading : "Delete",
				desc: "Are you sure want to delete this category?"
			}
			const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
				width: '500px',
				maxWidth: '90vw',
				data: obj
			});
			dialogRef.afterClosed().subscribe((result: any) => {
				if (result === 'confirm') {
					// let requestedData = {};
					// this._request.DELETE(`${ADMIN_DELETE_PRODUCT_API}/${categoryObj}`, requestedData).subscribe({
					// 	next: (resp: any) => {
					// 		this.loader = false;
					// 		this._router.navigate(['/product-management'])
					// 		this._snackbar.notify(resp.data, 1)
					// 	}, error: (err: any) => {
					// 		this.loader = false;
					// 		this._snackbar.notify(err.message, 2)
					// 	}
					// })
				}
			});
		}

	ngOnInit() {
		this.getCategories();
	}


}