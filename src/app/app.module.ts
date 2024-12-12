import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component/app.component';
import { HeaderComponent } from './common-components/header/header.component';
import { SidebarComponent } from './common-components/sidebar/sidebar.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { ProductDetailComponent } from './common-components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
