import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ADMIN_DELETE_PRODUCT_API, ADMIN_GET_PRODUCT_DETAILS_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { UpdateProductVarientsComponent } from '../update-product-varients/update-product-varients.component';
import { ConfirmationPopupComponent } from 'src/app/common-components/confirmation-popup/confirmation-popup.component';
import { UpdateRemainingDetailsComponent } from '../update-remaining-details/update-remaining-details.component';

@Component({
	selector: 'app-product-summary',
	templateUrl: './product-summary.component.html',
	styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent {
	productId: any = '';
	productDetail: any = [];
	loader: boolean = false;

	constructor(
		private _request: RequestService,
		private dialog: MatDialog,
		private _snackbar: SnackbarService,
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
	) {
		this._activatedRoute.params.subscribe((o: any) => {
			if (o.id) {
				this.productId = o.id
			}
			else {
				this._router.navigate(['/product-management'])
			}
		})
	}

	getProductDetails() {
		let requestedData = {};
		this.loader = true;
		this._request.GET(`${ADMIN_GET_PRODUCT_DETAILS_API}/${this.productId}`, requestedData).subscribe({
			next: (resp: any) => {
				this.productDetail = resp.data;
				this.loader = false;
			}, error: (err: any) => {
				this.loader = false;
				this._snackbar.notify(err.message, 2)
			}
		})
	}

	updateVarients(){
		let obj:any = {
			productId : this.productDetail.productId,
			details : this.productDetail,
		}
		const dialogRef = this.dialog.open(UpdateProductVarientsComponent, {
			width: '800px',
			maxWidth: '90vw',
			data: obj
		});

		dialogRef.afterClosed().subscribe((result: any) => {
			if (result === 'confirm') {
				this.getProductDetails();
			}
		});
	}


	updateRemainingDetails(){
		let obj:any = {
			productId : this.productDetail.productId,
			variants : this.productDetail.variants,
		}
		const dialogRef = this.dialog.open(UpdateRemainingDetailsComponent, {
			width: '800px',
			maxWidth: '90vw',
			data: obj
		});

		dialogRef.afterClosed().subscribe((result: any) => {
			if (result === 'confirm') {
				this.getProductDetails();
			}
		});
	}

	deleteProduct(){
		let obj:any = {
			heading : "Delete",
			desc: "Are you sure want to delete this product?"
		}
		const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
			width: '500px',
			maxWidth: '90vw',
			data: obj
		});
		dialogRef.afterClosed().subscribe((result: any) => {
			if (result === 'confirm') {
				let requestedData = {};
				this._request.DELETE(`${ADMIN_DELETE_PRODUCT_API}/${this.productId}`, requestedData).subscribe({
					next: (resp: any) => {
						this.loader = false;
						this._router.navigate(['/product-management'])
						this._snackbar.notify(resp.data, 1)
					}, error: (err: any) => {
						this.loader = false;
						this._snackbar.notify(err.message, 2)
					}
				})
			}
		});
	}



	back() {
		history.back();
	}


	ngOnInit() {
		this.getProductDetails();
	}

}
