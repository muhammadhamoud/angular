/**
 * User visited route
 */
export class VisitedRoute {
  /**
   * Route name
   */
  route: string;

  /**
   * Time when user entered the route
   */
  timeStart: Date;

  /**
   * Time when user left the route
   */
  timeEnd: Date;

  /**
   * Time duration in milliseconds
   */
  duration: number;

  /**
   * Constructor to initialize the VisitedRoute instance
   */
  constructor(route: string, timeStart: Date, timeEnd: Date) {
    this.route = route;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.duration = this.calculateDuration();
  }

  /**
   * Return time start string
   */
  getStartTimeString() {
    return this.timeStart.toISOString();
  }

  /**
   * Return time end string
   */
  getEndTimeString() {
    return this.timeEnd.toISOString();
  }

  /**
   * Calculate time duration on route in milliseconds
   */
  calculateDuration() {
    return Math.abs(this.timeEnd.getTime() - this.timeStart.getTime());
  }

  /**
   * Return object of visited route
   */
  getStringObject() {
    return {
      route: this.route,
      timeStart: this.getStartTimeString(),
      timeEnd: this.getEndTimeString(),
      duration: this.duration,
    };
  }
}
