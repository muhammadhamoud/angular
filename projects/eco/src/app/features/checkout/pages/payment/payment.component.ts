import { Component } from '@angular/core';
@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  approvalUrl: string = '';

  constructor(
    private orders: OrderService,
    private cart: CartService,
    private router: Router,
    private payments: PaypalPaymentService
  ) { }

  ngOnInit() {
    const orderId = this.cart.orderId;

    this.orders.getOrder(orderId, GetOrderParams.paymentSource)
      .pipe(
        concatMap((order: Order) => {
          const paymentSourceId = order.paymentSource?.id;

          const paymentMethod = order.availablePaymentMethods?.filter(
            (method) => method.paymentSourceType == 'paypal_payments'
          )[0];

          return iif(
            () => paymentSourceId ? true : false,
            this.payments.getPaypalPayment(paymentSourceId || ''),
            this.orders.updateOrder({
              id: orderId,
              paymentMethodId: paymentMethod?.id
            }, [UpdateOrderParams.paymentMethod])
              .pipe(concatMap(
                order => this.payments.createPaypalPayment({
                  orderId: orderId,
                  cancelUrl: `${environment.clientUrl}/cancel-payment`,
                  returnUrl: `${environment.clientUrl}/place-order`
                })
              ))
          );
        }))
      .subscribe(
        paypalPayment => this.approvalUrl = paypalPayment?.approvalUrl || '',
        err => this.router.navigateByUrl('/error')
      );
  }

  navigateToPaypal() {
    window.location.href = this.approvalUrl;
  }
}