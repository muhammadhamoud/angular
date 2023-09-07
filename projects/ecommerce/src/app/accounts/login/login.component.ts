import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { catchError, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, BrowserModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}


  onSubmit(): void {
    this.errorMessage = '';


    // if (this.email && this.password) {
    //   this.authService.login(this.email, this.password)
    //     .pipe(
    //       // Await the response from the server
    //       tap(response => console.log(response.message)),
    //       // Handle errors
    //       catchError(error => {
    //         this.errorMessage = 'Invalid credentials.';
    //       })
    //     )
    //     .subscribe();
    // } else {
    //   this.errorMessage = 'Please enter both email and password.';
    // }
  // }

  //   // Create observer object
  //   const LoginObserver = {
  //     next: (x: number) => console.log('Observer got a next value: ' + x),
  //     error: (err: Error) => console.error('Observer got an error: ' + err),
  //     complete: () => console.log('Observer got a complete notification'),
  //   };


    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(
        response => {
          console.log(response.message); // Display server response
        },
        error => {
          this.errorMessage = 'Invalid credentials.';
        }
      );
    } else {
      this.errorMessage = 'Please enter both email and password.';
    }
  }

}
