import { Component, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { NavigationFocusService } from '../services/navigation-focus.service';

export interface DocSection {
  name: string;
  summary: string;
}

const ADD_PRODUCT = 'products/add-product';
const PRODUCTS = 'products/product';
const CATEGORIES = 'products/category';
const PROPS = 'products/add-props';
const TEST = 'connectors/connector';

const LOGIN = 'login';
const SINGUP = 'signup';

export const SECTIONS: { [key: string]: DocSection } = {

  [LOGIN]: {
    name: 'Login',
    summary: '' +
      ' components.'
  },

  [SINGUP]: {
    name: 'Sign Up',
    summary: '' +
      ' components.'
  },

  [ADD_PRODUCT]: {
    name: 'Add Product',
    summary: '' +
      ' components.'
  },

  [PROPS]: {
    name: 'Add Properties',
    summary: '' +
      ' components.'
  },

  [PRODUCTS]: {
    name: 'Products',
    summary: '' +
      ' components.'
  },

  [CATEGORIES]: {
    name: 'Category',
    summary: '' +
      ' components.'
  },

  [TEST]: {
    name: 'TESTING',
    summary: '' +
      ' components.'
  },


};


const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  private subscriptions = new Subscription();
  // isNextVersion = location.hostname.startsWith('next.material.angular.io');
  skipLinkHref: string | null | undefined;
  skipLinkHidden = true;

  constructor(private navigationFocusService: NavigationFocusService) {
    setTimeout(() => this.skipLinkHref = this.navigationFocusService.getSkipLinkHref(), 100);
  }

  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
