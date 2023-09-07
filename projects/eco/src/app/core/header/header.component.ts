import { concat } from 'rxjs';
import { Component } from '@angular/core';
import { SessionService } from '../authentication/session.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../../data/services/cart.service';
import { HeaderService } from './header.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartAmount: number = 0;
  isLoggedIn: boolean = false;
  showButtons: boolean = true;

  constructor(
    private session: SessionService,
    private snackBar: MatSnackBar,
    private cart: CartService,
    private header: HeaderService,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.session.isCustomerLoggedIn()
      .subscribe(
        () => {
          this.isLoggedIn = true;
          this.session.setLoggedInStatus(true);
        }
      );

    this.session.loggedInStatus.subscribe(status => this.isLoggedIn = status);

    this.header.showHeaderButtons.subscribe(visible => this.showButtons = visible);

    this.cart.cartValue$.subscribe(cart => this.cartAmount = cart.itemCount);
  }

  logout() {
    concat(
      this.session.logout(),
      this.auth.getClientSession()
    ).subscribe(
      () => {
        this.snackBar.open('You have been logged out.', 'Close', { duration: 4000 });
        this.session.setLoggedInStatus(false);
      },
      err => this.snackBar.open('There was a problem logging you out.', 'Close', { duration: 4000 })
    );
  }
}