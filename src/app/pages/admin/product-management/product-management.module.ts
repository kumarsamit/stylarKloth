import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


const routes: Routes = [
	{
		path: '',
		component: ProductManagementComponent
	},
	{
		path: 'add-product',
		component: AddProductComponent
	}
];


@NgModule({
	declarations: [
		ProductManagementComponent,
		AddProductComponent
	],
	imports: [
		CommonModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatTableModule,
		RouterModule.forChild(routes)
	]
})
export class ProductManagementModule { }
