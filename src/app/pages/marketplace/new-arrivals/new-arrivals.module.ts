import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArrivalsComponent } from './new-arrivals.component';
import { Routes, RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';


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
    MatSelectModule,
    RouterModule.forChild(routes)

  ]
})
export class NewArrivalsModule { }
