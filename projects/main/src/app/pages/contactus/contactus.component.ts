import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactusService } from '../services/contactus.service';
import { NotificationService } from '../../core/notifications/notification.service'

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
// import { ProductItems, PRODUCT } from '../data/products.data';
import {
  selectSettingsLanguage,
  AppState,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../../core/core.module';
import { Router } from '@angular/router';


@Component({
  selector: 'ROI-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactusComponent {

  // contactusform = new FormGroup({
  //   'email': new FormControl('', [Validators.required, Validators.email]),
  //   'subject': new FormControl('', [Validators.required]),
  //   'message': new FormControl('', [Validators.required])
  // });
  language$: Observable<string> | undefined;
  contactusform = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });


  constructor(
    private contactusservice: ContactusService, 
    private notificationservice: NotificationService,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.language$ = this.store.pipe(select(selectSettingsLanguage));
      }

  getErrorMessageEmail() {
    // if (this.contactusform.email.hasError('required')) {
    //   return 'You must enter a value';
    // }
    // return this.contactusform.email.hasError('email') ? 'Not a valid email' : '';
    
  }

  getErrorMessageSubject() {
    // if (this.contactusform.subject.hasError('required')) {
    //   return 'You must enter a value';
    // } else {
    //   return this.contactusform.subject;
    // }
  }

  getErrorMessageMessage() {
    // if (this.contactusform.message.hasError('required')) {
    //   return 'You must enter a value';
    // } else {
    //   return this.contactusform.message;
    // }
  }

  // this.contactusform = this.formBuilder.group({
  //     subject: this.subject,
  //     email: this.email,
  //     message: this.message
  // });


  onSubmit() : void {
    // const payload = {
    //   subject: this.subject,
    //   email: this.email,
    //   message: this.message
    // };
    if (this.contactusform.valid) {
      // Submit the data
      const payload = this.contactusform.value

      this.contactusservice.sendEmail(payload).subscribe(response => {
        console.log(response);
        this.notificationservice.success(response.message);
        this.router.navigate(['/']);
      }, error => {
        console.error(error);
        this.notificationservice.error(error.message);
        // Handle error here
      });
    }

  }


}
