import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponManagementComponent } from './coupon-management.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CouponDetailComponent } from './coupon-detail/coupon-detail.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';



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
    CommonModule,
    MatIconModule,
    MatTableModule,
    RouterModule.forChild(routes)

  ]
})
export class CouponManagementModule { }
