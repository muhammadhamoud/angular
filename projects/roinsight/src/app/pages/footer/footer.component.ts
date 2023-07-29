import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ROI-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  email = "support@roinsight.com";
  address = "United Arab Emirates, Dubai, Sheikh Zayed Rd, Trade Centre DIFC, Rolex Tower Tower, 675G+X5";
  phone = "+971-503250175";

  email_subscribe = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email_subscribe.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email_subscribe.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(): void {
    // // Process checkout data here
    // this.items = this.cartService.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
  }


}
