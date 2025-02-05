import { Component } from '@angular/core';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { ADMIN_GET_COUPON_LIST_API } from '@env/api.path';

@Component({
	selector: 'app-coupon-management',
	templateUrl: './coupon-management.component.html',
	styleUrls: ['./coupon-management.component.scss']
})
export class CouponManagementComponent {

	loader: boolean = false;
	couponList: any = [];
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

	constructor(
		private _request: RequestService,
		private dialog: MatDialog,
		private _snackbar: SnackbarService,
		private _router: Router,
	) {

	}

	getCouponList() {
		let requestedData = {};
		this.loader = true;
		this._request.GET(ADMIN_GET_COUPON_LIST_API, requestedData).subscribe({
			next: (resp: any) => {
				this.couponList = resp.data;
				this.loader = false;
			}, error: (err: any) => {
				this.loader = false;
				this._snackbar.notify(err.message, 2)

			}
		})
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

	ngOnInit(){
		this.getCouponList();
	}
}
