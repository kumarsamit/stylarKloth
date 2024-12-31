import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagementComponent } from './customer-management.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



const routes: Routes = [
	{
		path: '',
		component: CustomerManagementComponent
	},
  {
		path: 'details/:id',
		component: CustomerProfileComponent
	}
];


@NgModule({
  declarations: [
    CustomerManagementComponent,
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)

  ]
})
export class CustomerManagementModule { }
