import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ADMIN_DELETE_PARENT_CATEGORY_API, ADMIN_DELETE_PRODUCT_API, ADMIN_GET_PARENT_CATEGORY_LIST_API } from '@env/api.path';
import { ConfirmationPopupComponent } from 'src/app/common-components/confirmation-popup/confirmation-popup.component';


@Component({
	selector: 'app-category-management',
	templateUrl: './category-management.component.html',
	styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent {

	categoryList: any = [];
	loader: boolean = false;
	displayedColumns: string[] = ['Category Id', 'Category Name', 'Description', 'Child Category', 'Actions'];

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
		this._request.GET(ADMIN_GET_PARENT_CATEGORY_LIST_API, requestedData).subscribe({
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
			type : 'create'
		}
		const dialogRefCreate = this.dialog.open(CreateCategoryComponent, {
			width: '600px',
			maxWidth: '90vw',
			data: obj
		});
		dialogRefCreate.afterClosed().subscribe((result: any) => {
			console.log('result', result)
			if (result === 'proceed') {
				this.getCategories();
			}
		});
	}
	
	updateCategory(dataObj:any) {
		let obj: any = {
			heading: 'Edit Category',
			type : 'edit',
			data : dataObj
		}
		const dialogRefUpdate = this.dialog.open(CreateCategoryComponent, {
			width: '600px',
			maxWidth: '90vw',
			data: obj
		});
		dialogRefUpdate.afterClosed().subscribe((result: any) => {
			console.log('result', result)
			if (result === 'proceed') {
				this.getCategories();
			}
		});
	}

	deleteProduct(categoryObj: any) {
		let obj: any = {
			heading: "Delete",
			desc: "Are you sure want to delete this category?"
		}
		const dialogRefDelete = this.dialog.open(ConfirmationPopupComponent, {
			width: '500px',
			maxWidth: '90vw',
			data: obj
		});
		dialogRefDelete.afterClosed().subscribe((result: any) => {
			console.log('result', result)
			if (result === 'proceed') {
				let requestedData = {};
				this._request.DELETE(`${ADMIN_DELETE_PARENT_CATEGORY_API}/${categoryObj.id}`, requestedData).subscribe({
					next: (resp: any) => {
						this.loader = false;
						this.getCategories();
						this._snackbar.notify(resp.data, 1)
					}, error: (err: any) => {
						this.loader = false;
						this._snackbar.notify(err.message, 2)
					}
				})
			}
		});
	}

	ngOnInit() {
		this.getCategories();
	}


}