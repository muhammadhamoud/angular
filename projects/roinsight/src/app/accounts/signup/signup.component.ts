import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'ROI-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent  {
  logo = 'assests/logo.png'

  registrationForm = this.formBuilder.group({
    // full_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AccountsService,
  ) {}

  getErrorMessage() {
    if (this.registrationForm.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registrationForm.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const user_type = 'customer' //this.registrationForm.get('user_type')?.value;
      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;
      this.authService.register(email, password, user_type).subscribe(
        response => console.log(response),
        error => console.log(error),
      );
  }
  }

}
