import { vehicles } from "@/data/vehicles";
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

const pages = [
  { path: "/", priority: 1, frequency: "weekly" },
  ...vehicles.map(vehicle => ({ path: `/cars/${vehicle.id}`, priority: 0.7, frequency: "monthly" as const })),
  { path: "/cars", priority: 0.95, frequency: "weekly" },
  { path: "/services", priority: 0.85, frequency: "monthly" },
  { path: "/services/short-term", priority: 0.9, frequency: "monthly" },
  { path: "/services/monthly", priority: 0.85, frequency: "monthly" },
  { path: "/services/long-term", priority: 0.8, frequency: "monthly" },
  { path: "/services/accident", priority: 0.8, frequency: "monthly" },
  { path: "/events", priority: 0.7, frequency: "weekly" },
  { path: "/guide", priority: 0.6, frequency: "monthly" },
  { path: "/contact", priority: 0.7, frequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  return pages.map((page) => ({
    url: new URL(page.path, origin).toString(),
    changeFrequency: page.frequency,
    priority: page.priority,
  }));
}
