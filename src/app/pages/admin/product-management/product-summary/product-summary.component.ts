import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ADMIN_GET_PRODUCT_DETAILS_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { UpdateProductVarientsComponent } from '../update-product-varients/update-product-varients.component';

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
			varients : this.productDetail.variants,

		}
		this.dialog.open(UpdateProductVarientsComponent, {
			width: '800px',
			maxWidth: '90vw',
			data: obj
		});

	}

	back() {
		history.back();
	}


	ngOnInit() {
		this.getProductDetails();
	}

}
