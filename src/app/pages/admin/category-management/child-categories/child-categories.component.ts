import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ADMIN_DELETE_CHILD_CATEGORY_LIST_API, ADMIN_GET_CHILD_CATEGORY_LIST_API, ADMIN_GET_PRODUCT_LIST } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { CreateChildCategoryComponent } from './create-child-category/create-child-category.component';
import { ConfirmationPopupComponent } from 'src/app/common-components/confirmation-popup/confirmation-popup.component';

@Component({
	selector: 'app-child-categories',
	templateUrl: './child-categories.component.html',
	styleUrls: ['./child-categories.component.scss']
})
export class ChildCategoriesComponent {
	loader: boolean = false;
	motherCategoryId: any = '';
	childCategoryList: any = [];


	constructor(
		private _request: RequestService,
		private dialog: MatDialog,
		private _snackbar: SnackbarService,
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
	) {
		this._activatedRoute.params.subscribe((o: any) => {
			if (o.id) {
				this.motherCategoryId = o.id
			}
			else {
				this._router.navigate(['/category-management'])
			}
		})
	}

	getChildCategories() {
		let requestedData = {};
		this.loader = true;
		this._request.GET(`${ADMIN_GET_CHILD_CATEGORY_LIST_API}/${this.motherCategoryId}`, requestedData).subscribe({
			next: (resp: any) => {
				this.childCategoryList = resp.data;
				console.log('this.childCategoryList', this.childCategoryList)
				this.loader = false;
			}, error: (err: any) => {
				this.loader = false;
				this._snackbar.notify(err.message, 2)

			}
		})
	}

	createCategory() {
		let obj: any = {
			heading: 'Create Child Category',
			type: 'create',
			motherCategoryId: this.motherCategoryId
		}
		const dialogRefCreate = this.dialog.open(CreateChildCategoryComponent, {
			width: '600px',
			maxWidth: '90vw',
			data: obj
		});
		dialogRefCreate.afterClosed().subscribe((result: any) => {
			console.log('result', result)
			if (result === 'proceed') {
				this.getChildCategories();
			}
		});
	};

	updateCategory(dataObj: any) {
		let obj: any = {
			heading: 'Edit Child Category',
			type: 'edit',
			data: dataObj,
			motherCategoryId: this.motherCategoryId

		}
		const dialogRefUpdate = this.dialog.open(CreateChildCategoryComponent, {
			width: '600px',
			maxWidth: '90vw',
			data: obj
		});
		dialogRefUpdate.afterClosed().subscribe((result: any) => {
			console.log('result', result)
			if (result === 'proceed') {
				this.getChildCategories();
			}
		});
	}

	deleteProduct(categoryObj: any) {
		let obj: any = {
			heading: "Delete",
			desc: "Are you sure want to delete this child category?"
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
				this._request.DELETE(`${ADMIN_DELETE_CHILD_CATEGORY_LIST_API}/${categoryObj.categoryId}`, requestedData).subscribe({
					next: (resp: any) => {
						this.loader = false;
						this.getChildCategories();
						this._snackbar.notify(resp.data, 1)
					}, error: (err: any) => {
						this.loader = false;
						this._snackbar.notify(err.message, 2)
					}
				})
			}
		});
	}



	back() {
		history.back();
	}


	ngOnInit() {
		this.getChildCategories();
	}



}
