import { mergeMap } from 'rxjs/operators';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionService } from 'projects/eco/src/app/core/authentication/session.service';
import { CustomerAddress } from 'projects/eco/src/app/data/models/customer-address';
import { CustomerAddressService } from 'projects/eco/src/app/data/services/customer-address.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
  addresses: CustomerAddress[] = [];

  @Output() setAddressEvent = new EventEmitter<string>();

  constructor(
    private session: SessionService,
    private customerAddresses: CustomerAddressService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.session.loggedInStatus
      .pipe(
        mergeMap(
          status => iif(() => status, this.customerAddresses.getCustomerAddresses())
        ))
      .subscribe(
        addresses => {
          if (addresses.length) {
            this.addresses = addresses
          }
        },
        err => this.snackBar.open('There was a problem getting your existing addresses.', 'Close', { duration: 8000 })
      );
  }

  setAddress(change: MatRadioChange) {
    this.setAddressEvent.emit(change.value);
  }
}