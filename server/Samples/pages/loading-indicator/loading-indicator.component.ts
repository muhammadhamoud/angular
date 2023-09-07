import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Exports {@link LoadingIndicator} that represent a simple loading indicator for better user expirience when some data loads.
 * Used code from {@link https://github.com/colinjlacy/angular-2-loading-indicator}
 */


@Component({
  selector: 'app-loading-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {

}

export class LoadingIndicator {}

/**
 * Logic for loading indicator
 */
export class LoadingPage {
    public loading: boolean;
    constructor(val: boolean) {
        this.loading = val;
    }

    /**
     * Data loads
     */
    standby() {
        this.loading = true;
    }

    /**
     * Data ready
     */
    ready() {
        this.loading = false;
    }
}