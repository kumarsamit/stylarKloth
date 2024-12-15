import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';


const routes: Routes = [
  {
    path :'',
    component: UserProfileComponent
  }
];

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule.forChild(routes)
  ]
})
export class UserProfileModule { }
