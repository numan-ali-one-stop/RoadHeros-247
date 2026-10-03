import type { MetadataRoute } from "next";

import { hasPage, serviceAreas } from "@/lib/service-areas";
import { services, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}${service.href ?? `/services/${service.slug}`}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: service.href ? 0.9 : 0.8,
  }));

  const areaRoutes: MetadataRoute.Sitemap = serviceAreas
    .flatMap((area) => [
      area.href,
      ...area.locations.map((location) => location.href),
    ])
    .filter(hasPage)
    .map((href) => ({
      url: `${siteConfig.url}${href}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
