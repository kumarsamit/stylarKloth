import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { UpdateProductVarientsComponent } from '../update-product-varients/update-product-varients.component';
import { ADMIN_UPDATE_REMAINING_DETAIL_PRODUCT_API } from '@env/api.path';

@Component({
	selector: 'app-update-remaining-details',
	templateUrl: './update-remaining-details.component.html',
	styleUrls: ['./update-remaining-details.component.scss']
})
export class UpdateRemainingDetailsComponent {

	productData: any = '';
	productId: any = '';


	productFormGroup: any = new FormGroup({
		productMaterial: new FormControl('', [Validators.required]),
		productClosureType: new FormControl('', [Validators.required]),
		productWaistType: new FormControl('', [Validators.required]),
	});

	constructor(
		private _request: RequestService,
		private dialog: MatDialog,
		private _snackbar: SnackbarService,
		private _router: Router,
		private dialogRef: MatDialogRef<UpdateProductVarientsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder

	) {
		this.productData = data.details;
		this.productId = data.productId
	}

	closePopup(type: any) {
		this.dialogRef.close(type);
	}


	updateRemainingDetails() {
		let requestedData:any = {};
		requestedData = this.productFormGroup.value;
		requestedData['productId'] = this.productId
		this._request.PATCH(ADMIN_UPDATE_REMAINING_DETAIL_PRODUCT_API, requestedData).subscribe({
			next: (resp: any) => {
				this.dialogRef.close('confirm');
				this._snackbar.notify(resp.data, 1)
			}, error: (err: any) => {
				this._snackbar.notify(err.message, 2)
			}
		})
	}

}
