import {Injectable, NgZone} from "@angular/core";

import { SessionFlowService } from '../index';
import { DbAbstractionLayerService } from "../index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * User data
   */
  userData = {};
  constructor(protected dal: DbAbstractionLayerService, protected sessionFlow: SessionFlowService, protected zone: NgZone){
    this.dal.getAuth().onAuthStateChanged(authData => {
      if(authData === null){
        this.sessionFlow.userId = 'guest';
        this.userData = {};
        this.dal.initializeBasketHistory(sessionFlow.deviceId);
      }
      if(authData){
        let uid = authData.uid;
        this.userData = {};
        this.userData['uid'] = uid;
        this.dal.getUserData(uid).subscribe( data => {
          if(data.val()){
            let userData = data.val()[0]['_source'];
            userData.userId = data.val()[0]['_id'];
            this.sessionFlow.userId = data.val()[0]['_id'];
            this.dal.initializeBasketHistory(userData.userId);
            this.zone.run(() => {
              this.userData = userData;
            });
          }
        });
      }
    });
  }


  /**
   * Logout method
   */
  logout(){
    return this.dal.logout();
  }

  /**
   * Register user
   * @param registerForm
   * @returns {Object} userData 
   */
  register(registerForm){
    return this.dal.registerUser(registerForm);
  }

  /**
   * Login with email and password
   * @param email user email
   * @param password user password
   * 
   * @returns user data
   */
  login(email, password){
    return this.dal.loginEmail(email, password);
  }

  /**
   * Reset user password
   * @param email user email
   * @returns Promise containing null
   */
  resetPassword(email) {
    return this.dal.resetPassword(email);
  }
}
