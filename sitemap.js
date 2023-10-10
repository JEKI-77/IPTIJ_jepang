import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const createSitemap = async () => {
  const stream = new SitemapStream({ hostname: "https://www.iptijtokyo.com" });

  const urls = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/page1", changefreq: "weekly", priority: 0.8 },
    { url: "/jadwalsholat", changefreq: "weekly", priority: 0.8 },
    { url: "/gallery", changefreq: "weekly", priority: 0.8 },
    { url: "/kajian", changefreq: "weekly", priority: 0.8 },
    { url: "/sitemap", changefreq: "weekly", priority: 0.8 },
    // Tambahkan URL lainnya di sini
  ];

  urls.forEach((url) => {
    stream.write(url);
  });

  stream.end();

  const sitemap = await streamToPromise(Readable.from([stream]));
  return sitemap.toString();
};

export default createSitemap;
