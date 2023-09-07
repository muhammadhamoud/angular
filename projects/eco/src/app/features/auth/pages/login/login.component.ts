import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'projects/eco/src/app/core/authentication/authentication.service';
import { SessionService } from 'projects/eco/src/app/core/authentication/session.service';
import { HeaderService } from 'projects/eco/src/app/core/header/header.service';

// @UntilDestroy({ checkProperties: true })

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private authService: AuthenticationService,
    private session: SessionService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private header: HeaderService,
    private location: Location
  ) { }

  ngOnInit() {
    this.header.setHeaderButtonsVisibility(false);
  }

  login() {
    const credentials = this.loginForm.value;
  
    if (credentials.email && credentials.password) {
      this.authService.login(
        credentials.email,
        credentials.password
      ).subscribe(
        () => {
          this.session.setLoggedInStatus(true);
          this.location.back();
        },
        err => {
          this.snackBar.open(
            'Login failed. Check your login credentials.',
            'Close',
            { duration: 6000 });
  
          this.loginForm.patchValue({ password: '' });
        }
      );
    } else {
      // Handle the case where either email or password is undefined
      console.error('Email or password is undefined');
    }
  }
  
}