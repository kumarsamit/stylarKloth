import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ADMIN_CREATE_PARENT_CATEGORY_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-create-category',
	templateUrl: './create-category.component.html',
	styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {
	heading: any = '';
	loader: boolean = false;
	categoryFormGroup = new FormGroup({
		parentCategoryName: new FormControl('', [Validators.required]),
		parentCategoryDescription: new FormControl('', [Validators.required]),
	})

	constructor(
		private _request: RequestService,
		private _dialogRef: DialogRef,
		private _snackbar: SnackbarService,
		private _router: Router,
		private dialogRef: MatDialogRef<CreateCategoryComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder

	) {
		this.heading = data.heading
	}


	closePopup(type: any) {
		this.dialogRef.close(type);
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
				console.log('resp', resp)
				this._dialogRef.close();
				this.loader = false;
			}, error: (err: any) => {
				this._dialogRef.close();
				this.loader = false;
				this._snackbar.notify(err.message, 2)

			}
		})

	}

}
