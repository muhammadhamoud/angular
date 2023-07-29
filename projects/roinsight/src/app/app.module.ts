import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    // HttpClientModule,
    // core
    CoreModule,

    // app
    AppRoutingModule,
    ReactiveFormsModule,

     FontAwesomeModule,
     MatInputModule,
     MatButtonModule,
     MatSelectModule,
     MatRadioModule,
     MatCardModule,
 

  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
