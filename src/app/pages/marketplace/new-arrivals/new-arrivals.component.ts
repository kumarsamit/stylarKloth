import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent {
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
		},
		{
			name: "Blue dress",
			price: "400",
			offerPrice: "600",
			img: "./assets/images/dummy/child-1.jpg"
		},
		{
			name: "Blue dress",
			price: "400",
			offerPrice: "600",
			img: "./assets/images/dummy/child-1.jpg"
		},
		{
			name: "Blue dress",
			price: "400",
			offerPrice: "600",
			img: "./assets/images/dummy/child-1.jpg"
		},
		{
			name: "Blue dress",
			price: "400",
			offerPrice: "600",
			img: "./assets/images/dummy/child-1.jpg"
		},
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
		},
		{
			name: "Blue dress",
			price: "400",
			offerPrice: "600",
			img: "./assets/images/dummy/child-1.jpg"
		},
		{
			name: "Blue dress",
			price: "400",
			offerPrice: "600",
			img: "./assets/images/dummy/child-1.jpg"
		}
	]

	shareOnWhatsApp() {
		let referralCode = 'ABC123';
		let referralMessage = `Use code ${referralCode} to get 20% off your next order! Your friend gets 10% off their first purchase. Start here: `;
		let referralLink = "https://www.stylarkloth.com";
		const message = `${referralMessage} ${referralLink}`;
		const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
		window.open(whatsappURL, '_blank');
	}

	
}
