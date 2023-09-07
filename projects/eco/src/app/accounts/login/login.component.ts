import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
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
          console.log(response.message); 
        },
        error => {
          this.errorMessage = 'Invalid credentials.';
        }
      );
    } else {
      this.errorMessage = 'Please enter both email and password.';
    }

  
  
  
  
  
  
  }


  // this.authService.login(this.email, this.password).subscribe(
  //   next?: ((value: any) => void) | null | undefined, 
  //   error?: ((error: any) => void) | null | undefined, 
  //   complete?: (() => void) | null | undefined
  //   )

}
