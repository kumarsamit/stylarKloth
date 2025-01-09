import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ADMIN_GET_PRODUCT_LIST } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-child-categories',
	templateUrl: './child-categories.component.html',
	styleUrls: ['./child-categories.component.scss']
})
export class ChildCategoriesComponent {
	loader: boolean = false;
	childCategoryList: any = [];

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
				this.childCategoryList = resp.data;
				this.loader = false;
			}, error: (err: any) => {
				this.loader = false;
				this._snackbar.notify(err.message, 2)

			}
		})
	}




	back() {
		history.back();
	}


	ngOnInit() {
		this.getCategories();
	}

	

}
