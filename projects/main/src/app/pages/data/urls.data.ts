
// import { Component } from '@angular/core';
// import { AboutComponent } from '../about/about.component';

export const navigation = [
    { link: 'home', label: 'ROI.menu.home' },
    { link: 'about', label: 'ROI.menu.about' },
    // { link: 'features-list', label: 'ROI.menu.features' },
    // { link: 'examples', label: 'ROI.menu.examples' },
    // { link: 'charts', label: 'Charts' },
    // { link: 'pages', label: 'ROI.menu.pages' },
    // { link: 'auth', label: 'ROI.menu.auth' },
  ];


export interface UrlRouters {
    name: string;
    path: string,
    // component: Component,
    data: { title: string  }
  }

  export const urlrouters: UrlRouters[] = [
    {
      name: 'Github',
      path: 'About',
    //   component: AboutComponent,
      data: { title: 'ROI.menu.about'}
    },
   
  ];