import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './accounts/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CookiePopupComponent } from './pages/cookie-popup/cookie-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionFlowService } from './management/services/session-flow/session-flow.service';
import { AuthModule } from './features/auth/auth.module';
// import { ProductsModule } from './features/products/products.module';
// import { CartModule } from './features/cart/cart.module';
// import { CheckoutModule } from './features/checkout/checkout.module';
import { CoreModule } from './core/core.module';
import { OptionsInterceptor } from './core/interceptors/options.interceptor';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    CookiePopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
    // Added recently
    AuthModule,
    // ProductsModule,
    // CartModule,
    // CheckoutModule,
    CoreModule


  ],
  providers: [
    // // added recently
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: OptionsInterceptor,
    //   multi: true
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (http: HttpClient) => () => http.post<object>(
    //     `${environment.api_url}/oauth/token`,
    //     { 'grantType': 'client_credentials' },
    //     { withCredentials: true }),
    //   multi: true,
    //   deps: [HttpClient]
    // },
        
    AuthService,
    { provide: 'sessionId', useValue: 'your-session-id-here' },
    { provide: 'deviceId', useValue: 'your-session-id-here' },
    { provide: 'isMobile', useValue: 'your-session-id-here' },
    SessionFlowService,
    ],
  bootstrap: [AppComponent],

})
export class AppModule { }
