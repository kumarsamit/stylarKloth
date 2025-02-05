import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponManagementComponent } from './coupon-management.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CouponDetailComponent } from './coupon-detail/coupon-detail.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';




const routes: Routes = [
  {
    path: '',
    component: CouponManagementComponent
  },
  {
    path: 'details/:id',
    component: CouponDetailComponent
  },
];


@NgModule({
  declarations: [
    CouponManagementComponent,
    CouponDetailComponent,
    CreateCouponComponent
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild(routes)

  ]
})
export class CouponManagementModule { }
