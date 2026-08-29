// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://primeedgeaccountants.co.uk',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/services',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/services/payroll-cheltenham',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/services/bookkeeping-cheltenham',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/services/tax-accountant-cheltenham',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/services/small-business-accountant-cheltenham',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/services/startup-accountant-cheltenham',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/services/contractor-accountant-gloucestershire',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/booking',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://primeedgeaccountants.co.uk/contact',
      lastModified: new Date(),
      priority: 0.7,
    },
  ]
}
