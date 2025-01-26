import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponManagementComponent } from './coupon-management.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';



const routes: Routes = [
  {
    path: '',
    component: CouponManagementComponent
  },
];


@NgModule({
  declarations: [
    CouponManagementComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    RouterModule.forChild(routes)

  ]
})
export class CouponManagementModule { }
