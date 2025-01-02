import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { UpdateProductVarientsComponent } from './update-product-varients/update-product-varients.component';
import { MatDialogModule } from '@angular/material/dialog';






const routes: Routes = [
	{
		path: '',
		component: ProductManagementComponent
	},
	{
		path: 'add-product',
		component: AddProductComponent
	},
	{
		path: 'summary/:id',
		component: ProductSummaryComponent
	}
];


@NgModule({
	declarations: [
		ProductManagementComponent,
		AddProductComponent,
		ProductSummaryComponent,
		UpdateProductVarientsComponent
	],
	imports: [
		CommonModule,
		MatDialogModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatTableModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatChipsModule,
		MatIconModule,
		RouterModule.forChild(routes)
	]
})
export class ProductManagementModule { }
