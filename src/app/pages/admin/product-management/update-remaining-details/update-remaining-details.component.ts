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
		console.log('data', data)
		this.productId = data.productId;
		this.productFormGroup = this.fb.group({
			productMaterial: new FormControl('',),
			productClosureType: new FormControl('',),
			productWaistType: new FormControl('',),
			productLegOpening: new FormControl('',),
			productEcoFriendlyRating: new FormControl('',),
			productPocketDetails: new FormControl('',),
			waterResistance: new FormControl('',),
			productBreathability: new FormControl('',),
			wishListOption: new FormControl(true,),
			isGiftWrapping: new FormControl(true,),
			priceAlert: new FormControl('',),
			productAverageRating: new FormControl('',),
			sizeChartType: new FormControl('',),
			productDimensions: new FormControl('',),
			reviews: this.fb.array([]),
		});
		this.productFormGroup.patchValue({
			productMaterial: this.productData.productMaterial,
			productClosureType: this.productData.productClosureType,
			productWaistType: this.productData.productWaistType,
			productLegOpening: this.productData.productLegOpening,
			productEcoFriendlyRating: this.productData.productEcoFriendlyRating,
			productPocketDetails: this.productData.productPocketDetails,
			waterResistance: this.productData.isWaterResistance,
			productBreathability: this.productData.productBreathability,
			wishListOption: this.productData.isWishListOption,
			isGiftWrapping: this.productData.isGiftWrapping,
			priceAlert: this.productData.isPriceAlert,
			productAverageRating: this.productData.productAverageRating,
			sizeChartType: this.productData.productAverageRating,
			productDimensions: this.productData.productDimensions,
			// reviews: this.fb.array([])
		})
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
		console.log('this.productFormGroup', this.productFormGroup)
		this.productFormGroup.markAllAsTouched();
		if(this.productFormGroup.status === 'INVALID'){
			return
		}
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

	patchItems() {
		if (this.productData.reviews.length) {
			this.productData.reviews.forEach((detail: any) => {
				this.reviews.push(
					this.fb.group({
						rating: new FormControl(detail.rating),
						review: new FormControl(detail.review),
					})
				);
			});
		}
	}

	ngOnInit() {
		this.addReview();
		this.patchItems();
	}
}
