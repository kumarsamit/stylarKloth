import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ADMIN_CREATE_CHILD_CATEGORY_API, ADMIN_UPDATE_CHILD_CATEGORY_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-create-child-category',
	templateUrl: './create-child-category.component.html',
	styleUrls: ['./create-child-category.component.scss']
})
export class CreateChildCategoryComponent {
	heading: any = '';
	modalType: any = '';
	loader: boolean = false;
	categoryData: any = '';
	motherCategoryId : any = '';
	categoryFormGroup = new FormGroup({
		categoryName: new FormControl('', [Validators.required]),
		categoryDescription: new FormControl('', [Validators.required]),
	})

	constructor(
		private _request: RequestService,
		private _snackbar: SnackbarService,
		private _router: Router,
		private _dialogRef: MatDialogRef<CreateChildCategoryComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder

	) {
		this.heading = data.heading;
		this.modalType = data.type;
		this.motherCategoryId = data.motherCategoryId
		this.categoryData = data.data

		if (data.data) {
			this.categoryFormGroup.patchValue({
				categoryName: this.categoryData.categoryName,
				categoryDescription: this.categoryData.categoryDescription,
			})
		}
	}
	closePopup(type: any) {
		this._dialogRef.close(type);
	}

	createCategory() {
		if(this.loader === true){
			return
		}
		let requestedData = {
			categoryImage: "image.jpg",
			parentCategoryId : this.motherCategoryId
		};
		this.categoryFormGroup.markAllAsTouched();
		if (this.categoryFormGroup.status === 'INVALID') {
			return
		};
		this.loader = true;
		requestedData = { ...requestedData, ...this.categoryFormGroup.value };
		this._request.POST(ADMIN_CREATE_CHILD_CATEGORY_API, requestedData).subscribe({
			next: (resp: any) => {
				this._snackbar.notify(resp.message, 1)
				this._dialogRef.close('proceed');
				this.loader = false;
			}, error: (err: any) => {
				this._dialogRef.close();
				this.loader = false;
				this._snackbar.notify(err.message, 2)

			}
		})
	}

	updateCategory() {
		let requestedData = {
			parentCategoryImage: "image.jpg",
			parentCategoryId : this.motherCategoryId

		};
		this.categoryFormGroup.markAllAsTouched();
		if (this.categoryFormGroup.status === 'INVALID') {
			return
		};
		requestedData = { ...requestedData, ...this.categoryFormGroup.value };
		this.loader = true;
		this._request.PATCH(`${ADMIN_UPDATE_CHILD_CATEGORY_API}/${this.categoryData.categoryId}`, requestedData).subscribe({
			next: (resp: any) => {
				this._snackbar.notify(resp.message, 1)
				this._dialogRef.close('proceed');
				this.loader = false;
			}, error: (err: any) => {
				this._dialogRef.close();
				this.loader = false;
				this._snackbar.notify(err.message, 2)

			}
		})
	}


}
