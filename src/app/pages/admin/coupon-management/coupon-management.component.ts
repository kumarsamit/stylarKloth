import { Component } from '@angular/core';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-coupon-management',
	templateUrl: './coupon-management.component.html',
	styleUrls: ['./coupon-management.component.scss']
})
export class CouponManagementComponent {


	displayedColumns: string[] = [
		'couponCode',
		'orderMin',
		'discountValue',
		'maxDiscount',
		'limit',
		'status',
		'endDate',
		'actions',
	];

	coupons = [
		{
			couponCode: 'SAVE20',
			description: '20% off on orders above $100',
			discountType: 'Percentage',
			orderMinValue: '2000',
			discountValue: '20%',
			maxDiscount: '400',
			status: 'Active',
			limit: '20',
			endDate: new Date('2025-12-31'),
		},
		{
			couponCode: 'SAVE20',
			description: '20% off on orders above $100',
			discountType: 'Percentage',
			orderMinValue: '2000',
			discountValue: '20%',
			maxDiscount: '300',
			status: 'Active',
			limit: '20',
			endDate: new Date('2025-12-31'),
		},
		{
			couponCode: 'SAVE20',
			description: '20% off on orders above $100',
			discountType: 'Percentage',
			orderMinValue: '2000',
			discountValue: '20%',
			maxDiscount: '300',
			status: 'Active',
			limit: '20',
			endDate: new Date('2025-12-31'),
		}
	];

	constructor(
		private _request: RequestService,
		private dialog: MatDialog,
		private _snackbar: SnackbarService,
		private _router: Router,
	) {

	}

	createCoupon() {
		let obj: any = {
			heading: 'Create Coupon',
			type: 'create'
		}
		const dialogRefCreate = this.dialog.open(CreateCouponComponent, {
			width: '600px',
			maxWidth: '90vw',
			data: obj
		});
		dialogRefCreate.afterClosed().subscribe((result: any) => {
			// console.log('result', result)
			// if (result === 'proceed') {
			// 	this.getCategories();
			// }
		});
	}

	onEditCoupon(coupon: any) {
		console.log('Edit coupon', coupon);
	}

	onDeleteCoupon(coupon: any) {
		console.log('Delete coupon', coupon);
	}
}
