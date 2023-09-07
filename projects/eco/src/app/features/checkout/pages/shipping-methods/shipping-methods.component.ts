import { Component } from '@angular/core';
@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-shipping-methods',
  templateUrl: './shipping-methods.component.html',
  styleUrls: ['./shipping-methods.component.scss']
})
export class ShippingMethodsComponent implements OnInit {
  shipments: Shipment[] | undefined = [];
  shipmentsForm: FormGroup = this.fb.group({});

  constructor(
    private orders: OrderService,
    private dlts: DeliveryLeadTimeService,
    private cart: CartService,
    private router: Router,
    private fb: FormBuilder,
    private shipments: ShipmentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    combineLatest([
      this.orders.getOrder(this.cart.orderId, GetOrderParams.shipments),
      this.dlts.getDeliveryLeadTimes()
    ]).subscribe(
      ([lineItems, deliveryLeadTimes]) => {
        let li: LineItem;
        let lt: DeliveryLeadTime[];

        this.shipments = lineItems.shipments?.map((shipment) => {
          if (shipment.id) {
            this.shipmentsForm.addControl(shipment.id, new FormControl('', Validators.required));
          }

          if (shipment.lineItems) {
            shipment.lineItems = shipment.lineItems.map(item => {
              li = this.findItem(lineItems, item.skuCode || '');
              item.imageUrl = li.imageUrl;
              item.name = li.name;
              return item;
            });
          }

          if (shipment.availableShippingMethods) {
            lt = this.findLocationLeadTime(deliveryLeadTimes, shipment);
            shipment.availableShippingMethods = shipment.availableShippingMethods?.map(
              method => {
                method.deliveryLeadTime = this.findMethodLeadTime(lt, method);
                return method;
              });
          }

          return shipment;
        });
      },
      err => this.router.navigateByUrl('/error')
    );
  }

  setShipmentMethods() {
    const shipmentsFormValue = this.shipmentsForm.value;

    combineLatest(Object.keys(shipmentsFormValue).map(
      key => this.shipments.updateShipment(key, shipmentsFormValue[key])
    )).subscribe(
      () => {
        this.snackBar.open('Your shipments have been updated with a shipping method.', 'Close', { duration: 3000 });
        setTimeout(() => this.router.navigateByUrl('/payment'), 4000);
      },
      err => this.snackBar.open('There was a problem adding shipping methods to your shipments.', 'Close', { duration: 5000 })
    );
  }


  private findItem(lineItems: LineItem[], skuCode: string): LineItem {
    return lineItems.filter((item) => item.skuCode == skuCode)[0];
  }

  private findLocationLeadTime(times: DeliveryLeadTime[], shipment: Shipment): DeliveryLeadTime[] {
    return times.filter((dlTime) => dlTime?.stockLocation?.id == shipment?.stockLocation?.id);
  }

  private findMethodLeadTime(times: DeliveryLeadTime[], method: ShippingMethod): DeliveryLeadTime {
    return times.filter((dlTime) => dlTime?.shippingMethod?.id == method?.id)[0];
  }
}