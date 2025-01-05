import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management.component';
import { Routes, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ChildCategoriesComponent } from './child-categories/child-categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: CategoryManagementComponent
  },
  {
    path: "list/:id",
    component: ChildCategoriesComponent
  }
];


@NgModule({
  declarations: [
    CategoryManagementComponent,
    ChildCategoriesComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild(routes)

  ]
})
export class CategoryManagementModule { }
