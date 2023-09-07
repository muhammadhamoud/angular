import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { NotificationService } from '../../core/notifications/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  registrationForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  getErrorMessage() {
    if (this.registrationForm.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registrationForm.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      
      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;

      this.authService.register(email?? '', password?? '').subscribe({
        next: (response)=> this.notificationService.success(response.message),
        error: (error) => console.log(error),
        complete: () => console.log('complete')

      })
    }
  }
}
