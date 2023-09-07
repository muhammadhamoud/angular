
export interface MyObject {
  /**
   * Time when click emitted
   */
  time: Date | undefined;
  /**
   * Selector where user clicked
   */
  selectorName: string | undefined;
  /**
   * Current route where user clicked
   */
  route: string | undefined;
};


/**
 * User click in app
 */
export class UserClick{
  /**
   * Time when click emitted
   */
  time: Date | undefined;
  /**
   * Selector where user clicked
   */
  selectorName: string | undefined;
  /**
   * Current route where user clicked
   */
  route: string | undefined;

  /**
   * Return object with string params
   */
  // getStringObject(){
  //   let object = {};
  //   object['route'] = this.route;
  //   object['selectorName'] = this.selectorName;
  //   object['time'] = this.time.toISOString();
  //   return object;
  // }

  // Inside your class or service
  getStringObject(): any {
    let object = {
      route: this.route,
      selectorName: this.selectorName,
      time: this.time ? this.time.toISOString() : '',
    };
    return object;
  }

}
