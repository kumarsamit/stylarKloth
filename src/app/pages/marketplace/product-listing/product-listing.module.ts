import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'',
    component: ProductListingComponent
  }
];

@NgModule({
  declarations: [
    ProductListingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class ProductListingModule { }
