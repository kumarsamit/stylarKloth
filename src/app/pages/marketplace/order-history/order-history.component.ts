import { Component } from '@angular/core';

@Component({
	selector: 'app-order-history',
	templateUrl: './order-history.component.html',
	styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {

	products: any = [
		{
			name: "Blue dress",
			price: "400",
			offerPrice: "600",
			img: "./assets/images/dummy/child-1.jpg"
		},
		{
			name: "Blue dress",
			price: "400",
			// offerPrice : "600",
			img: "./assets/images/dummy/child-1.jpg"
		},
		{
			name: "Blue dress",
			price: "400",
			offerPrice: "600",
			img: "./assets/images/dummy/child-1.jpg"
		}
	]


}
