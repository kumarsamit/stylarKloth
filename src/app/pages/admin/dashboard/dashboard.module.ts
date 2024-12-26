import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';


const routes: Routes = [
  {
    path :'',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
