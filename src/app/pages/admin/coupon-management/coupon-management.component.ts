import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon-management',
  templateUrl: './coupon-management.component.html',
  styleUrls: ['./coupon-management.component.scss']
})
export class CouponManagementComponent {


  displayedColumns: string[] = [
    'couponCode',
    'discountType',
    'orderMax',
    'orderMin',
    'discountValue',
    'status',
    'startDate',
    'endDate',
    'actions',
  ];

  coupons = [
    {
      couponCode: 'SAVE20',
      description: '20% off on orders above $100',
      discountType: 'Percentage',
      discountValue: '20%',
      status: 'Active',
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-12-31'),
    },
    {
      couponCode: 'FREESHIP',
      description: 'Free shipping on orders above $50',
      discountType: 'Flat',
      discountValue: '$0',
      status: 'Expired',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
    },
    {
      couponCode: 'FREESHIP',
      description: 'Free shipping on orders above $50',
      discountType: 'Flat',
      discountValue: '$0',
      status: 'Inactive',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
    },
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
