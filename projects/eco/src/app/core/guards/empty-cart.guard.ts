import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartService } from '../../data/services/cart.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';


// import { CanActivateFn } from '@angular/router';

// export const emptyCartGuard: CanActivateFn = (route, state) => {
//   return true;
// };


@Injectable({
  providedIn: 'root'
})
export class EmptyCartGuard implements CanActivate {
  constructor(private cart: CartService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.cart.orderId) {
      if (this.cart.itemCount > 0) {
        return true;
      }
    }

    return this.router.parseUrl('/empty');
  }
}