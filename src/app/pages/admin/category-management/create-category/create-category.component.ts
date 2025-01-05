import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';

@Component({
	selector: 'app-create-category',
	templateUrl: './create-category.component.html',
	styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {
	heading: any = '';
	categoryFormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
	})

	constructor(
		private _request: RequestService,
		private dialog: MatDialog,
		private _snackbar: SnackbarService,
		private _router: Router,
		private dialogRef: MatDialogRef<CreateCategoryComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder

	) {
		this.heading = data.heading
	}


	closePopup(type: any) {
		this.dialogRef.close(type);
	}

	createCategory() {
		console.log("!11111111111")
	}

}
