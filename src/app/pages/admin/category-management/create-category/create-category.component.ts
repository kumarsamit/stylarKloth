import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ADMIN_CREATE_PARENT_CATEGORY_API, ADMIN_UPDATE_PARENT_CATEGORY_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-create-category',
	templateUrl: './create-category.component.html',
	styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {
	heading: any = '';
	modalType: any = '';
	loader: boolean = false;
	categoryData:any='';
	categoryFormGroup = new FormGroup({
		parentCategoryName: new FormControl('', [Validators.required]),
		parentCategoryDescription: new FormControl('', [Validators.required]),
	})

	constructor(
		private _request: RequestService,
		private _snackbar: SnackbarService,
		private _router: Router,
		private _dialogRef: MatDialogRef<CreateCategoryComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder

	) {
		this.heading = data.heading;
		this.modalType = data.type;
		this.categoryData = data.data

		if(data.data){
			this.categoryFormGroup.patchValue({
				parentCategoryName : this.categoryData.name,
				parentCategoryDescription : this.categoryData.description,
			})
		}
	}


	closePopup(type: any) {
		this._dialogRef.close(type);
	}

	createCategory() {
		let requestedData = {
			"parentCategoryImage": "image.jpg"
		};
		this.categoryFormGroup.markAllAsTouched();
		if (this.categoryFormGroup.status === 'INVALID') {
			return
		};
		requestedData = { ...requestedData, ...this.categoryFormGroup.value };
		this._request.POST(ADMIN_CREATE_PARENT_CATEGORY_API, requestedData).subscribe({
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
			"parentCategoryImage": "image.jpg",

		};
		this.categoryFormGroup.markAllAsTouched();
		if (this.categoryFormGroup.status === 'INVALID') {
			return
		};
		requestedData = { ...requestedData, ...this.categoryFormGroup.value };
		this._request.PATCH(`${ADMIN_UPDATE_PARENT_CATEGORY_API}/${this.categoryData.id}`, requestedData).subscribe({
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
