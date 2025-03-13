import { Facebook, Instagram, Twitter } from 'lucide-react'

export const footer = {
  brand: {
    name: 'Groclone.',
    tagline: `"Maximize your decision-making capabilities with our powerful analytical tools. Harness the power of your data to drive growth and success."`,
  },
  sections: [
    {
      title: 'Navigate',
      links: ['Home', 'Pricing', 'Blog', 'About'],
    },
    {
      title: 'Support Us',
      links: ['FAQs', 'Contact Us', 'Support Center', 'Security'],
    },
    {
      title: 'Partner',
      links: ['Our Partners', 'Subscriber'],
    },
    {
      title: 'Contact US',
      contact: {
        email: 'Growclone@business.com',
        phone: '+61 7 7010 6803',
        social: [
          {
            platform: 'Instagram',
            icon: Instagram,
            link: '#',
          },
          {
            platform: 'Twitter',
            icon: Twitter,
            link: '#',
          },
          {
            platform: 'Facebook',
            icon: Facebook,
            link: '#',
          },
        ],
      },
    },
  ],
  copyright: {
    text: '© 2023 Groclone, We love our users!',
    policies: ['Terms & Conditions', 'Privacy Policy', 'Sitemap'],
  },
}
