import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management.component';
import { Routes, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ChildCategoriesComponent } from './child-categories/child-categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryManagementComponent
  },
  {
    path :"list/:id",
    component : ChildCategoriesComponent
  }
];


@NgModule({
  declarations: [
    CategoryManagementComponent,
    ChildCategoriesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)

  ]
})
export class CategoryManagementModule { }
