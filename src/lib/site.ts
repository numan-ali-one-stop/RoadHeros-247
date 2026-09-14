const DEFAULT_SITE_URL = "http://localhost:3000";

function normalizeUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "Road Heros",
  description: "Road Heros — placeholder site description.",
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL),
} as const;
