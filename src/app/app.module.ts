import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component/app.component';
import { HeaderComponent } from './common-components/header/header.component';
import { SidebarComponent } from './common-components/sidebar/sidebar.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardHeaderComponent } from './common-components/dashboard-header/dashboard-header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor/auth.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationPopupComponent } from './common-components/confirmation-popup/confirmation-popup.component';
import { MatIconModule } from '@angular/material/icon';
import { WebsiteSidebarComponent } from './common-components/website-sidebar/website-sidebar.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SignInComponent,
    DashboardHeaderComponent,
    ConfirmationPopupComponent,
    WebsiteSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
