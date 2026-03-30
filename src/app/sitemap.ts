import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://pankajsuthar.dev", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://pankajsuthar.dev/projects", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://pankajsuthar.dev/blogs", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://pankajsuthar.dev/skills", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://pankajsuthar.dev/contact", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
