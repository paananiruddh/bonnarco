import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

const routes = [
  "",
  "/about",
  "/what-we-do",
  "/technology",
  "/brands",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
  }));
}
