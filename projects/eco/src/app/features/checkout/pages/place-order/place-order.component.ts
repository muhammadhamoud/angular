import { Component } from '@angular/core';
@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  disableButton = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private payments: PaypalPaymentService,
    private orders: OrderService,
    private cart: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.queryParams
      .pipe(
        concatMap(params => {
          const payerId = params['PayerID'];
          const orderId = this.cart.orderId;

          return iif(
            () => payerId.length > 0,
            this.orders.getOrder(orderId, GetOrderParams.paymentSource)
              .pipe(
                concatMap(order => {
                  const paymentSourceId = order.paymentSource?.id || '';

                  return iif(
                    () => paymentSourceId ? paymentSourceId.length > 0 : false,
                    this.payments.updatePaypalPayment(paymentSourceId, payerId)
                  );
                })
              )
          );
        }))
      .subscribe(
        () => this.disableButton = false,
        () => this.router.navigateByUrl('/error')
      );
  }

  placeOrder() {
    this.disableButton = true;

    this.orders.updateOrder({
      id: this.cart.orderId,
      place: true
    }, [UpdateOrderParams.place])
      .subscribe(
        () => {
          this.snackBar.open('Your order has been successfully placed.', 'Close', { duration: 3000 });
          this.cart.clearCart();
          setTimeout(() => this.router.navigateByUrl('/'), 4000);
        },
        () => {
          this.snackBar.open('There was a problem placing your order.', 'Close', { duration: 8000 });
          this.disableButton = false;
        }
      );
  }
}