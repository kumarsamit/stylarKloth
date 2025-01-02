import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-update-product-varients',
	templateUrl: './update-product-varients.component.html',
	styleUrls: ['./update-product-varients.component.scss']
})
export class UpdateProductVarientsComponent {
	varients:any='';

	constructor(
		private dialogRef: MatDialogRef<UpdateProductVarientsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
	) {
		this.varients = data;
		console.log('data', data)
	}

	closePopup(type: any) {
		this.dialogRef.close(type);
	}

}
