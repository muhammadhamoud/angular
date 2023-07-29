import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CookiePopup } from './shared/cookie-popup/cookie-popup';
import { FooterComponent } from './pages/footer/footer.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CookiePopup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
