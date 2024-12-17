import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ProductManagementComponent
	}
];


@NgModule({
	declarations: [
		ProductManagementComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class ProductManagementModule { }
