import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon-management',
  templateUrl: './coupon-management.component.html',
  styleUrls: ['./coupon-management.component.scss']
})
export class CouponManagementComponent {


  displayedColumns: string[] = [
    'couponCode',
    'orderMin',
    'discountValue',
    'maxDiscount',
    'limit',
    'status',
    'endDate',
    'actions',
  ];

  coupons = [
    {
      couponCode: 'SAVE20',
      description: '20% off on orders above $100',
      discountType: 'Percentage',
      orderMinValue: '2000',
      discountValue: '20%',
      maxDiscount: '400',
      status: 'Active',
      limit: '20',
      endDate: new Date('2025-12-31'),
    },
    {
      couponCode: 'SAVE20',
      description: '20% off on orders above $100',
      discountType: 'Percentage',
      orderMinValue: '2000',
      discountValue: '20%',
      maxDiscount: '300',
      status: 'Active',
      limit: '20',
      endDate: new Date('2025-12-31'),
    },
    {
      couponCode: 'SAVE20',
      description: '20% off on orders above $100',
      discountType: 'Percentage',
      orderMinValue: '2000',
      discountValue: '20%',
      maxDiscount: '300',
      status: 'Active',
      limit: '20',
      endDate: new Date('2025-12-31'),
    }
  ];

  onAddCoupon() {
    console.log('Add new coupon');
  }

  onEditCoupon(coupon: any) {
    console.log('Edit coupon', coupon);
  }

  onDeleteCoupon(coupon: any) {
    console.log('Delete coupon', coupon);
  }
}
