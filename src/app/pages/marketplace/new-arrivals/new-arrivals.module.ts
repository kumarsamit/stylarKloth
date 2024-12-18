import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArrivalsComponent } from './new-arrivals.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path :'',
    component: NewArrivalsComponent
  }
];

@NgModule({
  declarations: [
    NewArrivalsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class NewArrivalsModule { }
