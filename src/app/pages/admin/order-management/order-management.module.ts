import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderManagementComponent } from './order-management.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';


const routes: Routes = [
	{
		path: '',
		component: OrderManagementComponent
	}
];

@NgModule({
  declarations: [
    OrderManagementComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes)

  ]
})
export class OrderManagementModule { }
