import { createSitemap as _createSitemap } from "sitemap";

const createSitemap = () => {
  const sitemap = _createSitemap({
    hostname: "https://www.iptijtokyo.com",
    urls: [
      { url: "/", changefreq: "daily", priority: 1.0 },
      { url: "/", changefreq: "weekly", priority: 0.8 },
      { url: "/jadwalsholat", changefreq: "weekly", priority: 0.8 },
      { url: "/gallery", changefreq: "weekly", priority: 0.8 },
      { url: "/kajian", changefreq: "weekly", priority: 0.8 },
      // Tambahkan URL lainnya di sini
    ],
  });

  return sitemap.toString();
};

export default createSitemap;
