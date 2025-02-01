import { Component } from '@angular/core';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

	currentIndex = 0;
	offset = 0;
	private autoPlayInterval: any;
	private paused = false;

	slides = [
		{
			image: './assets/images/dummy/banner-1.jpg',
			title: 'Summer Collection',
			subtitle: 'Discover our latest summer styles'
		},
		{
			image: './assets/images/dummy/banner-1.jpg',
			title: 'Winter Essentials',
			subtitle: 'Stay warm in style'
		},
		{
			image: './assets/images/dummy/banner-1.jpg',
			title: 'New Arrivals',
			subtitle: 'Fresh styles just arrived'
		}
	];

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

	get prevIndex() {
		return (this.currentIndex - 1 + this.slides.length) % this.slides.length;
	}

	get nextIndex() {
		return (this.currentIndex + 1) % this.slides.length;
	}

	next() {
		this.currentIndex = (this.currentIndex + 1) % this.slides.length;
		this.offset = -this.currentIndex * 100;
	}

	prev() {
		this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
		this.offset = -this.currentIndex * 100;
	}

}
