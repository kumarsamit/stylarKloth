import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-confirmation-popup',
	templateUrl: './confirmation-popup.component.html',
	styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent {
	detail: any = '';

	constructor(
		private dialogRef: MatDialogRef<ConfirmationPopupComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
	) {
		this.detail = data;
	}

	closePopup(type: any) {
		this.dialogRef.close(type);
	}

}
