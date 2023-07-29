import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SocialMedia {
    name: string;
    description: string;
    documentation: string;
    icons: IconProp;
    link: string;
  }

  export const socialmedia: SocialMedia[] = [
    {
      name: 'Github',
      description: '',
      documentation: '',
      icons: ['fab', 'github'],
      link: 'https://github.com/roinsightsupport'
    },
    {
        name: 'Instagram',
        description: '',
        documentation: '',
        icons: ['fab', 'instagram'],
        link: 'link'
      },
      {
        name: 'Facebook',
        description: '',
        documentation: '',
        icons: ['fab', 'facebook'],
        link: 'link'
      },
      {
        name: 'Twitter',
        description: '',
        documentation: '',
        icons: ['fab', 'twitter'],
        link: 'link'
      },
      {
        name: 'Youtube',
        description: '',
        documentation: '',
        icons: ['fab', 'youtube'],
        link: 'link'
      },
      {
        name: 'Whatsapp',
        description: '',
        documentation: '',
        icons: ['fab', 'whatsapp'],
        link: 'https://wa.link/c4v2fy'
      },
      {
        name: 'Linkedin',
        description: '',
        documentation: '',
        icons: ['fab', 'linkedin'],
        link: 'link'
      },
  ];

