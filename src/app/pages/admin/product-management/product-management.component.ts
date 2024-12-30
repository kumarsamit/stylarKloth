import { Component } from '@angular/core';
import { ADMIN_GET_PRODUCT_LIST } from '@env/api.path';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { RequestService } from 'src/app/services/https/request.service';


@Component({
	selector: 'app-product-management',
	templateUrl: './product-management.component.html',
	styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent {
	
	displayedColumns: string[] = ['Product Id', 'Product Name', 'Category', 'Price', 'Offer Price', 'Actual Price', 'Stock', 'Status', 'Actions'];
	productList:any=[];
	loader:boolean = false;


	constructor(
		private _request: RequestService,
		private _snackbar: SnackbarService,
		
	) {

	}

	getProducts() {
		let requestedData = {};
		this.loader = true;
		this._request.GET(ADMIN_GET_PRODUCT_LIST, requestedData).subscribe({
			next: (resp: any) => {
				this.productList = resp.data;
				this.loader = false;
			}, error: (err) => {
				this.loader = false;
				this._snackbar.notify(err.message, 2)

			}
		})
	}

	ngOnInit(){
		this.getProducts();
	}


}
