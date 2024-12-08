import { NgModule } from '@angular/core';
import { routesUrl } from './route-urls'
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routesUrl,{scrollPositionRestoration: 'enabled'})],
  // providers: [ValidateMeta,BlogMetaResolver, DashboardMetaResolver],
  exports: [RouterModule]
})
export class AppRoutingModule { }
