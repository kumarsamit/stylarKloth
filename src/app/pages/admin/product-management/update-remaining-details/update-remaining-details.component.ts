import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

	productFormGroup: FormGroup;


	constructor(
		private _request: RequestService,
		private dialog: MatDialog,
		private _snackbar: SnackbarService,
		private _router: Router,
		private dialogRef: MatDialogRef<UpdateProductVarientsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder

	) {
		this.productData = data.productDetail;
		this.productId = data.productId;
		this.productFormGroup = this.fb.group({
			productMaterial: new FormControl('', [Validators.required]),
			productClosureType: new FormControl('', [Validators.required]),
			productWaistType: new FormControl('', [Validators.required]),
			productLegOpening: new FormControl('', [Validators.required]),
			productEcoFriendlyRating: new FormControl('', [Validators.required]),
			productPocketDetails: new FormControl('', [Validators.required]),
			waterResistance: new FormControl('', [Validators.required]),
			productBreathability: new FormControl('', [Validators.required]),
			wishListOption: new FormControl(true, [Validators.required]),
			isGiftWrapping: new FormControl(true, [Validators.required]),
			priceAlert: new FormControl('', [Validators.required]),
			productAverageRating: new FormControl('', [Validators.required]),
			sizeChartType: new FormControl('', [Validators.required]),
			productDimensions: new FormControl('', [Validators.required]),
			reviews: this.fb.array([]),
		});
		// this.productFormGroup.patchValue({
		// 	productMaterial: this.productData.productMaterial,
		// 	productClosureType: this.productData,
		// 	productWaistType: this.productData,
		// 	productLegOpening: this.productData,
		// 	productEcoFriendlyRating: this.productData,
		// 	productPocketDetails: this.productData,
		// 	waterResistance: this.productData,
		// 	productBreathability: this.productData,
		// 	wishListOption:this.productData,
		// 	isGiftWrapping:this.productData,
		// 	priceAlert: this.productData,
		// 	productAverageRating: this.productData,
		// 	sizeChartType: this.productData,
		// 	productDimensions: this.productData,
		// 	reviews: this.fb.array([]),
		// })
	}

	get reviews(): FormArray {
		return this.productFormGroup.get('reviews') as FormArray;
	}

	addReview() {
		const reviwGroup = this.fb.group({
			rating: new FormControl('', [Validators.required]),
			review: new FormControl('', [Validators.required]),
		});
		this.reviews.push(reviwGroup);
	}

	removeReview(index: number) {
		this.reviews.removeAt(index);
	}

	closePopup(type: any) {
		this.dialogRef.close(type);
	}

	updateRemainingDetails() {
		let requestedData: any = {};
		requestedData = this.productFormGroup.value;
		requestedData['productId'] = this.productId;
		requestedData['sustainability'] = [
			{
				"certificateName": "EcoCert"
			}
		];
		this._request.PATCH(ADMIN_UPDATE_REMAINING_DETAIL_PRODUCT_API, requestedData).subscribe({
			next: (resp: any) => {
				this.dialogRef.close('confirm');
				this._snackbar.notify(resp.data, 1)
			}, error: (err: any) => {
				this._snackbar.notify(err.message, 2)
			}
		})
	}

	ngOnInit() {
		this.addReview();
	}


}
