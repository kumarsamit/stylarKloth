import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ADMIN_UPDATE_PRODUCT_VARIANT_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-update-product-varients',
	templateUrl: './update-product-varients.component.html',
	styleUrls: ['./update-product-varients.component.scss']
})
export class UpdateProductVarientsComponent {
	variantsData: any = ''
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
		this.variantsData = data;
		this.productFormGroup = this.fb.group({
			variants: this.fb.array([]),
		});
	}

	get variants(): FormArray {
		return this.productFormGroup.get('variants') as FormArray;
	}

	addVariant() {
		const variantGroup = this.fb.group({
			size: new FormControl('', [Validators.required]),
			color: new FormControl('', [Validators.required]),
			quantity: new FormControl('', [Validators.required]),
		});
		this.variants.push(variantGroup);
	}

	removeVariant(index: number) {
		this.variants.removeAt(index);
	}

	closePopup(type: any) {
		this.dialogRef.close(type);
	}

	patchItems() {
		if (this.variantsData.variants.length) {
			this.variantsData.variants.forEach((detail: any) => {
				this.variants.push(
					this.fb.group({
						size: new FormControl(detail.size),
						color: new FormControl(detail.color),
						quantity: new FormControl(detail.quantity),
					})
				);
			});
		}
	}

	updateVariants() {
		let requestedData = {};
		requestedData = this.productFormGroup.value.variants
		this._request.PATCH(`${ADMIN_UPDATE_PRODUCT_VARIANT_API}/${this.variantsData.productId}`, requestedData).subscribe({
			next: (resp: any) => {
				this.dialogRef.close('confirm');
				this._snackbar.notify(resp.data, 1)
			}, error: (err: any) => {
				this._snackbar.notify(err.message, 2)
			}
		})
	}

	ngOnInit() {
		this.patchItems();
	}
}
