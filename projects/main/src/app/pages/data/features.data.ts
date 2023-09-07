import {Injectable} from '@angular/core';

export interface FeatureItem {
  id: string;
  name: string;
  document: string;
  overview: string;
  image: string;
}

const FEATURES = [
  // {
  //   id: 'getting-started',
  //   name: 'ROI.title.long',
  //   document: 'features_01',
  //   overview: 'ROI.landing.header_main',
  //   image: 'assets/content/features/Feature_01_800x600.jpg'
  // },
  {
    id: 'getting-started',
    name: 'ROI.marketing.name_01',
    document: 'features_01',
    overview: 'ROI.services.description_01',
    image: 'assets/content/features/Feature_01_800x600.jpg'
  },
  {
    id: 'getting-started',
    name: 'ROI.marketing.name_02',
    document: 'features_01',
    overview: 'ROI.services.description_02',
    image: 'assets/content/features/Feature_02_800x600.jpg'
  },
  {
    id: 'getting-started',
    name: 'ROI.marketing.name_03',
    document: 'assets/markdown/about_',
    overview: 'ROI.services.description_03',
    image: 'assets/content/features/Feature_03_800x600.jpg'
  },
];

@Injectable({providedIn: 'root'})
export class FeatureItems {

  getAllItems(): FeatureItem[] {
    return FEATURES;
  }

  getItemById(id: string): FeatureItem | undefined {
    return FEATURES.find(i => i.id === id);
  }
}


// export interface Features {
//   name: string;
//   image?: string;
//   description: string;
//   url?: string;
// }
// export const features: Features[] = [
//   {
//     name: 'ROI.marketing.name_01',
//     description: 'ROI.services.description_01',
//     image: '',
//     url: '',
//   },
//   {
//     name: 'ROI.marketing.name_02',
//     description: 'ROI.services.description_02',
//     image: '',
//     url: '',
//   },
//   {
//     name: 'ROI.marketing.name_03',
//     description: 'ROI.services.description_03',
//     image: '',
//     url: '',
//   },
// ];
