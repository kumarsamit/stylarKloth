import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path :'',
    component: SearchResultsComponent
  }
];

@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchResultsModule { }
