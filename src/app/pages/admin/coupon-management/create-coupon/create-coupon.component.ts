import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ADMIN_CREATE_COUPON_API, ADMIN_GET_PARENT_CATEGORY_LIST_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-create-coupon',
	templateUrl: './create-coupon.component.html',
	styleUrls: ['./create-coupon.component.scss']
})
export class CreateCouponComponent {

	heading: any = '';
	modalType: any = '';
	loader: boolean = false;
	categoryData: any = '';
	categoryList: any = [];
	couponFormGroup = new FormGroup({
		couponCode: new FormControl('', [Validators.required]),
		orderMinimumValue: new FormControl('', [Validators.required]),
		discountValue: new FormControl('', [Validators.required]),
		maxDiscountValue: new FormControl('', [Validators.required]),
		limit: new FormControl('', [Validators.required]),
		expiryDate: new FormControl('', [Validators.required]),
		parentCategories: new FormControl('', [Validators.required]),
		couponDescription: new FormControl('', [Validators.required]),
		discountType: new FormControl('', [Validators.required]),
		createdBy: new FormControl('', [Validators.required]),
	})

	constructor(
		private _request: RequestService,
		private _snackbar: SnackbarService,
		private _router: Router,
		private _dialogRef: MatDialogRef<CreateCouponComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder

	) {
		this.heading = data.heading;
		this.modalType = data.type;
		this.categoryData = data.data

		if (data.data) {
			this.couponFormGroup.patchValue({
				couponCode: this.categoryData.name,
			})
		}
	}
	closePopup(type: any) {
		this._dialogRef.close(type);
	};

	getCategories() {
		let requestedData = {};
		this._request.GET(ADMIN_GET_PARENT_CATEGORY_LIST_API, requestedData).subscribe({
			next: (resp: any) => {
				this.categoryList = resp.data;
			}, error: (err: any) => {
				this._snackbar.notify(err.message, 2)

			}
		})
	}


	createCoupon() {
		let requestedData:any = {
			couponCode: "DISCOUNT2025",
			orderMinimumValue: 100,
			discountValue: 20,
			maxDiscountValue: 50,
			limit: 1000,
			expiryDate: "2025-12-31",
			parentCategories: [1, 4],
			couponDescription: "Special discount for 2025",
			discountType: 1,
		}
		requestedData['createdBy'] = "admin"
		this._request.POST(ADMIN_CREATE_COUPON_API, requestedData).subscribe({
			next: (resp: any) => {
				this._snackbar.notify(resp.message, 1);
				this.loader = false;
			}, error: (err: any) => {
				this.loader = false;
				this._snackbar.notify(err.message, 2);
			}
		})
		console.log('this.couponFormGroup', this.couponFormGroup)
	}
	updateCoupon() {
		console.log('this.couponFormGroup', this.couponFormGroup)
	}

	ngOnInit(){
		this.getCategories();
	}

}
