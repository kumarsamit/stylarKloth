import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

	isEditable: boolean = false;

	userFormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		phone: new FormControl('', [Validators.required]),
		sex: new FormControl('', [Validators.required]),
	})

	updateUserDetails() {
		console.log("!11111111", this.userFormGroup.value)
	}

	editForm() {
		this.isEditable = !this.isEditable;
	}




}
