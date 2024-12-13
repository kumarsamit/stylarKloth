import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  list:any=[
    {
      name : "Long dress",
      price : 400,
      quantity : 4
    },
    {
      name : "Long dress",
      price : 400,
      quantity : 4
    },
    {
      name : "Long dress",
      price : 400,
      quantity : 4
    },
    {
      name : "Long dress",
      price : 400,
      quantity : 4
    }
  ]
}
