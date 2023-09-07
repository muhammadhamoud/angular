
import {Injectable} from '@angular/core';

export interface OurServiceItem {
  id: string;
  name: string;
  description: string;
  documentation: string;
  icons: string;
  link: string;
}

const OURSERVICES = [
  {
    id: "01",
    name: 'ROI.services.name_01',
    description: 'ROI.services.description_01',
    documentation: '',
    icons: 'business',
    link: 'link'
  },
  {
    id: "02",
    name: 'ROI.services.name_02',
    description: 'ROI.services.description_02',
    documentation: '',
    icons: 'contacts',
    link: 'link'
  },
  {
    id: "03",
    name: 'ROI.services.name_03',
    description: 'ROI.services.description_03',
    documentation: '',
    icons: 'co_present',
    link: 'link'
  },
  {
    id: "04",
    name: 'ROI.services.name_04',
    description: 'ROI.services.description_04',
    documentation: '',
    icons: 'domain_disabled',
    link: 'link'
  },
  {
    id: "05",
    name: 'ROI.services.name_05',
    description: 'ROI.services.description_05',
    documentation: '',
    icons: 'contact_emergency',
    link: 'link'
  },
  {
    id: "06",
    name: 'ROI.services.name_06',
    description: 'ROI.services.description_06',
    documentation: '',
    icons: 'more_time',
    link: 'link'
  },
  {
    id: "07",
    name: 'ROI.services.name_07',
    description: 'ROI.services.description_07',
    documentation: '',
    icons: 'hub',
    link: 'link'
  },
  {
    id: "08",
    name: 'ROI.services.name_08',
    description: 'ROI.services.description_08',
    documentation: '',
    icons: 'person_search',
    link: 'link'
  },
  // {
  // id: "09",
  //   name: 'ROI.services.name_09',
  //   description: 'ROI.services.description_09',
  //   documentation: '',
  //   icons: 'restaurant',
  //   link: 'link'
  // },
  {
    id: "10",
    name: 'ROI.services.name_10',
    description: 'ROI.services.description_10',
    documentation: '',
    icons: 'hotel',
    link: 'link'
  },
  {
    id: "11",
    name: 'ROI.services.name_11',
    description: 'ROI.services.description_11',
    documentation: '',
    icons: 'local_offer',
    link: 'link'
  },
  {
    id: "12",
    name: 'ROI.services.name_12',
    description: 'ROI.services.description_12',
    documentation: '',
    icons: 'factory',
    link: 'link'
  },
  {
    id: "13",
    name: 'ROI.services.name_13',
    description: 'ROI.services.description_13',
    documentation: '',
    icons: 'transfer_within_a_station',
    link: 'link'
  },
  {
    id: "14",
    name: 'ROI.services.name_14',
    description: 'ROI.services.description_14',
    documentation: '',
    icons: 'festival',
    link: 'link'
  },
  {
    id: "15",
    name: 'ROI.services.name_15',
    description: 'ROI.services.description_15',
    documentation: '',
    icons: 'hail',
    link: 'link'
  },
  {
    id: "16",
    name: 'ROI.services.name_16',
    description: 'ROI.services.description_16',
    documentation: '',
    icons: 'newspaper',
    link: 'link'
  },
  {
    id: "17",
    name: 'ROI.services.name_17',
    description: 'ROI.services.description_17',
    documentation: '',
    icons: 'computer',
    link: 'link'
  },
  {
    id: "18",
    name: 'ROI.services.name_18',
    description: 'ROI.services.description_18',
    documentation: '',
    icons: 'signal_cellular_alt',
    link: 'link'
  },
  {
    id: "19",
    name: 'ROI.services.name_19',
    description: 'ROI.services.description_19',
    documentation: '',
    icons: 'graphic_eq',
    link: 'link'
  },
  {
    id: "20",
    name: 'ROI.services.name_20',
    description: 'ROI.services.description_20',
    documentation: '',
    icons: 'radar',
    link: 'link'
  },
  {
    id: "21",
    name: 'ROI.services.name_21',
    description: 'ROI.services.description_21',
    documentation: '',
    icons: 'ssid_chart',
    link: 'link'
  },
  {
    id: "22",
    name: 'ROI.services.name_22',
    description: 'ROI.services.description_22',
    documentation: '',
    icons: 'apartment',
    link: 'link'
  }
];

@Injectable({providedIn: 'root'})
export class OurServiceItems {

  getAllItems(): OurServiceItem[] {
    return OURSERVICES;
  }

  getItemById(id: string): OurServiceItem | undefined {
    return OURSERVICES.find(i => i.id === id);
  }
}