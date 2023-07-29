import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { NotificationService } from '../notifications/notification.service';

/** Application-wide error handler that adds a UI notification to the error handling
 * provided by the default Angular ErrorHandler.
 */
@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(private notificationsService: NotificationService) {
    super();
  }

  override handleError(error: Error | HttpErrorResponse) {
    let displayMessage = 'An error occurred.';

    if (!environment.production) {
      displayMessage += ' See console for details.';
    }

    if (error instanceof HttpErrorResponse && error.status === 404) {
      // Handle 404 (Not Found) error
      this.notificationsService.error('404 Not Found: The requested resource was not found.');
    } else {
      // Handle other errors
      this.notificationsService.error(displayMessage);
    }
    super.handleError(error);
  }
}
