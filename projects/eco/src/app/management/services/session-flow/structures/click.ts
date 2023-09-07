/**
 * User click in app
 */
export class UserClick {
  /**
   * Time when click emitted
   */
  time: Date;
  
  /**
   * Selector where user clicked
   */
  selectorName: string;
  
  /**
   * Current route where user clicked
   */
  route: string;

  /**
   * Constructor to initialize the UserClick instance
   */
  constructor(time: Date, selectorName: string, route: string) {
    this.time = time;
    this.selectorName = selectorName;
    this.route = route;
  }

  /**
   * Return object with string params
   */
  getStringObject() {
    return {
      route: this.route,
      selectorName: this.selectorName,
      time: this.time.toISOString()
    };
  }
}
