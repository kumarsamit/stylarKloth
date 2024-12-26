import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

	back() {
		history.back();
	}


	createProduct(){

	}

}
