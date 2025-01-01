import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ADMIN_CREATE_PRODUCT_API } from '@env/api.path';
import { RequestService } from '@services/https/request.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';

export interface Tag {
	tag: string;
}
@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
	washing_instructions: any = ['Machine Wash', 'Hand Wash Only', 'Wash in Cold Water', 'Wash in Warm Water', 'Do Not Wash', 'Gentle Cycle Only', 'Separate Colors'];
	ironing_instructions: any = ['Iron at Low Temperature', 'Iron at Medium Temperature', 'Iron at High Temperature', 'Steam Iron', 'Do Not Iron'];
	dry_cleaning: any = ['Dry Clean Only', 'Do Not Dry Clean', 'Dry Clean with Specific Solvents'];
	storage_instructions: any = ['Store in a Cool, Dry Place', 'Do Not Fold', 'Avoid Humidity', 'Use Mothballs or Silica Gel for Protection', 'Store Flat'];
	readonly addOnBlur = true;
	readonly separatorKeysCodes = [ENTER, COMMA] as const;
	readonly tagList = signal<Tag[]>([{ tag : 'stylarKloth' }]);
	readonly announcer = inject(LiveAnnouncer);


	productFormGroup: FormGroup;
	constructor(
		private _request: RequestService,
		private _snackbar: SnackbarService,
		private _router: Router,
		private fb: FormBuilder
	) {

		this.productFormGroup = this.fb.group({
			productName: new FormControl('', [Validators.required]),
			productDescription: new FormControl('', [Validators.required]),
			productBrand: new FormControl('', [Validators.required]),
			category: new FormControl('', [Validators.required]),
			productPrice: new FormControl('', [Validators.required]),
			productDiscountedPrice: new FormControl('', [Validators.required]),
			productActualPrice: new FormControl('', [Validators.required]),
			productMaterial: new FormControl('', [Validators.required]),
			tags: new FormControl('', [Validators.required]),
			productWeight: new FormControl('', []),
			washing: new FormControl('', []),
			ironing: new FormControl('', []),
			drying: new FormControl('', []),
			storage: new FormControl('', []),
			title: new FormControl('', []),
			description: new FormControl('', []),
			seoKeyWords: new FormControl('', []),
			variants: this.fb.array([]),
		});
	}



	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();

		// Add our fruit
		if (value) {
			this.tagList.update(tagList => [...tagList, { tag: value }]);
		}

		// Clear the input value
		event.chipInput!.clear();
	}

	remove(tag: Tag): void {
		this.tagList.update(tagList => {
			const index = tagList.indexOf(tag);
			if (index < 0) {
				return tagList;
			}

			tagList.splice(index, 1);
			this.announcer.announce(`Removed ${tag.tag}`);
			return [...tagList];
		});
	}

	edit(tag: Tag, event: MatChipEditedEvent) {
		const value = event.value.trim();

		if (!value) {
			this.remove(tag);
			return;
		}

		// Edit existing fruit
		this.tagList.update(tagList => {
			const index = tagList.indexOf(tag);
			if (index >= 0) {
				tagList[index].tag = value;
				return [...tagList];
			}
			return tagList;
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

	createProduct() {
		this.productFormGroup.value.tags = this.tagList();
		console.log('productFormGroup', this.productFormGroup.value);

		return;
		let requestedData = {}
		this._request.GET(ADMIN_CREATE_PRODUCT_API, requestedData).subscribe({
			next: (resp: any) => {
				console.log('resp', resp)
				this._router.navigate(['/product-management'])
				this._snackbar.notify(resp.message, 1)
			}, error: (err) => {
				this._snackbar.notify(err.message, 2)

			}
		})
	}

	back() {
		history.back();
	}

	ngOnInit() {
		this.addVariant();
	}


}
