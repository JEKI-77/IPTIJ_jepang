import { useEffect, useState } from "react";
import createSitemap from "../../../sitemap";

const SitemapPage = () => {
  const [sitemapXML, setSitemapXML] = useState("");

  useEffect(() => {
    async function fetchSitemap() {
      const sitemapData = await createSitemap();
      setSitemapXML(sitemapData);
    }

    fetchSitemap();
  }, []);

  return (
    <div>
      <h1>Sitemap</h1>
      <pre>{sitemapXML}</pre>
    </div>
  );
};

export default SitemapPage;
