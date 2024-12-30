import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ADMIN_CREATE_PRODUCT_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

	productFormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		phone: new FormControl('', [Validators.required]),
		desc: new FormControl('', [Validators.required]),
	})

	constructor(
		private _request: RequestService,
		private _snackbar: SnackbarService,

	) {

	}

	createProduct() {
		let requestedData = {}
		this._request.GET(ADMIN_CREATE_PRODUCT_API, requestedData).subscribe({
			next: (resp: any) => {
				console.log('resp', resp)
				this._snackbar.notify(resp.message, 2)
			}, error: (err) => {
				this._snackbar.notify(err.message, 2)

			}
		})
	}

	back() {
		history.back();
	}

	ngOnInit() {
		this.createProduct();
	}






}
