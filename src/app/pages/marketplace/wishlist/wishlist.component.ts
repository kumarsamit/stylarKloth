import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  products: any = [
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true
    },
    {
      name: "Blue dress",
      price: "400",
      // offerPrice : "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: false
    },
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: false
    },
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true
    },
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true
    },
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true
    },
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true
    },
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true
    },
    {
      name: "Blue dress",
      price: "400",
      // offerPrice : "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true,
    },
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true,
    },
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true
    },
    {
      name: "Blue dress",
      price: "400",
      offerPrice: "600",
      img: "./assets/images/dummy/child-1.jpg",
      isStock: true
    }
  ];

}
