import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {

  selectedTab:any="Best Seller"
  tabType:any=['Best Seller', 'New Arrivals', 'Sale Product'];
  products:any=[
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      // offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      // offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    },
    {
      name : "Blue dress",
      price : "400",
      offerPrice : "600",
      img : "./assets/images/dummy/child-1.jpg"
    }
  ]

}
