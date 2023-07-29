import {Injectable} from '@angular/core';

export interface GuideItem {
  id: string;
  name: string;
  document: string;
  overview: string;
}

const GUIDES = [
  {
    id: 'getting-started',
    name: 'Getting started',
    document: '/roi-content/guides/getting-started.html',
    overview: 'Add Angular Material to your project!'
  },
  {
    id: 'schematics',
    name: 'Schematics',
    document: '/roi-content/guides/schematics.html',
    overview: 'Use schematics to quickly generate views with Material Design components.'
  },
  {
    id: 'theming',
    name: 'Theming Angular Material',
    document: '/roi-content/guides/theming.html',
    overview: 'Customize your application with Angular Material\'s theming system.'
  },
  {
    id: 'theming-your-components',
    name: 'Theming your own components',
    document: '/roi-content/guides/theming-your-components.html',
    overview: 'Use Angular Material\'s theming system in your own custom components.'
  },
  {
    id: 'typography',
    name: 'Customizing Typography',
    document: '/roi-content/guides/typography.html',
    overview: 'Configure the typography settings for Angular Material components.'
  },
  {
    id: 'customizing-component-styles',
    name: 'Customizing component styles',
    document: '/roi-content/guides/customizing-component-styles.html',
    overview: 'Understand how to approach style customization with Angular Material components.'
  },
  {
    id: 'creating-a-custom-form-field-control',
    name: 'Custom form field control',
    document: '/roi-content/guides/creating-a-custom-form-field-control.html',
    overview: 'Build a custom control that integrates with `<mat-form-field>`.'
  },
  {
    id: 'elevation',
    name: 'Elevation helpers',
    document: '/roi-content/guides/elevation.html',
    overview: 'Enhance your components with elevation and depth.'
  },
  {
    id: 'creating-a-custom-stepper-using-the-cdk-stepper',
    name: 'Custom stepper using the CdkStepper',
    document: '/roi-content/guides/creating-a-custom-stepper-using-the-cdk-stepper.html',
    overview: 'Create a custom stepper components using Angular CDK.'
  },
  {
    id: 'using-component-harnesses',
    name: 'Testing with component harnesses',
    document: '/roi-content/guides/using-component-harnesses.html',
    overview: 'Write tests with component harnesses for convenience and meaningful results.'
  },
  {
    id: 'duplicate-theming-styles',
    name: 'Duplicate theming styles',
    document: '/roi-content/guides/duplicate-theming-styles.html',
    overview: 'Learn about our new color mixins for Sass that avoid duplicating theming styles.'
  },
  {
    id: 'mdc-migration',
    name: 'Migrating to MDC-based Components',
    document: '/roi-content/guides/v15-mdc-migration.html',
    overview: 'Learn how to migrate your app to the new MDC-based components available in v15.'
  }
];

@Injectable({providedIn: 'root'})
export class GuideItems {

  getAllItems(): GuideItem[] {
    return GUIDES;
  }

  getItemById(id: string): GuideItem | undefined {
    return GUIDES.find(i => i.id === id);
  }
}
