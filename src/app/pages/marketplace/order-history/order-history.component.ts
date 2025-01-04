import { Component } from '@angular/core';

@Component({
	selector: 'app-order-history',
	templateUrl: './order-history.component.html',
	styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {

	orderList: any = [
		{
			orderId : 'STYLR101',
			orderDate : "Jul 6, 2021",
			totalAmoumt : 2400,
			productList:[
				{
					name : "Sleeveless Dresses",
					desc : "Dresses without sleeves for unrestricted movement and easy wear during warmer seasons. Often paired with cardigans or shrugs for layering.",
					deliverDate :  "Jul 9, 2021",
					price : 1299
				},
				{
					name : "Sleeveless Dresses",
					desc : "Dresses without sleeves for unrestricted movement and easy wear during warmer seasons. Often paired with cardigans or shrugs for layering.",
					deliverDate :  "Jul 9, 2021",
					price : 1299
				}
			]
		},
		{
			orderId : 'STYLR101',
			orderDate : "Jul 6, 2021",
			totalAmoumt : 2400,
			deliverDate :  "Jul 9, 2021",
			productList:[
				{
					name : "Sleeveless Dresses",
					desc : "Dresses without sleeves for unrestricted movement and easy wear during warmer seasons. Often paired with cardigans or shrugs for layering.",
					deliverDate :  "Jul 9, 2021",
					price : 1299
				}
			]
		},
	]


}
