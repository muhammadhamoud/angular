import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountsService } from '../services/accounts.service';
import { LocalStorageService, NotificationService } from '../../core/core.module';

@Component({
  selector: 'ROI-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  errors: string | undefined;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AccountsService,
    private notificationservice: NotificationService,
    private cd: ChangeDetectorRef,
    private storageService: LocalStorageService,
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log(response.data);
          this.storageService.setItem('TOKEN-ACCESS', response.data.tokens.access);
          this.storageService.setItem('TOKEN-REFRESH', response.data.tokens.refresh);
          this.storageService.setItem('TOKEN-EMAIL', response.data.email);
          this.cd.detectChanges();
        },
        error: (error) => {
          this.isLoading = false;
          // console.log("Error:", error.error.errors.detail);
          this.errors = error.error.errors.detail;
          this.notificationservice.error(error.error.errors.detail);
          this.cd.detectChanges();
        },
        complete: () => {
          console.log('complete');
          console.log('isLoading after:', this.isLoading);
        },
      });

      // this.authService.login(email, password).subscribe({
      //   next: (v) => console.log(v),
      //   error: (e) => console.error(e),
      //   complete: () => console.info('complete') 
      // })

      // this.authService.login(email, password).subscribe(response => {
      //   this.isLoading = false;
      //   // console.log(response);
      //   console.log(response.data);
      //   this.storageService.setItem('TOKEN-ACCESS', response.data.tokens.access);
      //   this.storageService.setItem('TOKEN-REFRESH', response.data.tokens.refresh);
      //   this.storageService.setItem('TOKEN-EMAIL', response.data.email);
      //   // this.notificationservice.success(response.message)
      //   this.cd.detectChanges(); // <-- add this
      // }, error => {
      //   this.isLoading = false;
      //   // console.log("Error:", error.error.errors.detail);
      //   this.errors = error.error.errors.detail
      //   this.notificationservice.error(error.error.errors.detail)
      //   this.cd.detectChanges(); // <-- add this
      // });
  }
  console.log('isLoading after:', this.isLoading);
  };

  onFormSubmit() {
    if (this.loginForm.valid) {
      this.authService.addUser(this.loginForm.value).subscribe({
        next: (val: any) => {
          alert('Employee is added successfuly')
          
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  };


}
