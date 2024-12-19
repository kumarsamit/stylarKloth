import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  filters:any = [
    {
      heading: "Discount",
      items : ['Up to 10%','Up to 20%',"Up to 30%", "Up to 40%" , "Up to  50%"]
    },
    {
      heading: "Price",
      items : ['0 -  ₹499','₹500 - ₹999',"₹1000 - ₹1499", '₹1500 - ₹1999']
    },
    {
      heading: "Color",
      items : ['Mutlicolor','Red',"White", "Blue", "black"]
    },
    {
      heading: "Gender",
      items : ['Male','Female',"Unisex"]
    },
    {
      heading: "Gender",
      items : ['Male','Female',"Unisex"]
    },

  ]

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
	];

}
