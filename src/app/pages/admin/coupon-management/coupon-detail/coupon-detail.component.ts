import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ADMIN_GET_COUPON_DETIALS_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-coupon-detail',
	templateUrl: './coupon-detail.component.html',
	styleUrls: ['./coupon-detail.component.scss']
})
export class CouponDetailComponent {

	couponId:any='';
	loader:boolean=false;
	couponDetails:any='';

	constructor(
		private _request: RequestService,
		private dialog: MatDialog,
		private _snackbar: SnackbarService,
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
	) {
		this._activatedRoute.params.subscribe((o: any) => {
			if (o.id) {
				this.couponId = o.id
			}
			else {
				this._router.navigate(['/coupon-management'])
			}
		})
	}

	getCouponDetails() {
		let requestedData = {};
		this.loader = true;
		this._request.GET(`${ADMIN_GET_COUPON_DETIALS_API}/${this.couponId}`, requestedData).subscribe({
			next: (resp: any) => {
				this.couponDetails = resp.data;
				this.loader = false;
			}, error: (err: any) => {
				this.loader = false;
				this._snackbar.notify(err.message, 2)
			}
		})
	}

	ngOnInit(){
		this.getCouponDetails();
	}



}
