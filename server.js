import express from "express";
import path from "path";
import fs from "fs";
const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3e3;
const isProd = process.env.NODE_ENV === "production";
app.use(express.json());
const enquiries = [];
app.post("/api/enquiry", (req, res) => {
  const {
    name,
    businessName,
    contactMethod,
    contactValue,
    interest,
    description,
    budget,
    timeline,
    selectedPackage
  } = req.body;
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!contactValue || typeof contactValue !== "string" || contactValue.trim().length === 0) {
    return res.status(400).json({ error: "Contact detail (Email or WhatsApp number) is required" });
  }
  if (!description || typeof description !== "string" || description.trim().length === 0) {
    return res.status(400).json({ error: "Please include a brief description of what you want to achieve" });
  }
  const record = {
    id: `WS-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
    name: name.trim(),
    businessName: businessName?.trim() || void 0,
    contactMethod: contactMethod === "email" ? "email" : "whatsapp",
    contactValue: contactValue.trim(),
    interest: interest?.trim() || "General Enquiry",
    description: description.trim(),
    budget: budget?.trim() || void 0,
    timeline: timeline?.trim() || void 0,
    selectedPackage: selectedPackage?.trim() || void 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  enquiries.unshift(record);
  return res.status(201).json({
    success: true,
    referenceId: record.id,
    timestamp: record.createdAt,
    message: "Enquiry received successfully. Bright Cheteni will review your requirements."
  });
});
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    brand: "Webspect AI & Dev",
    founder: "Bright Cheteni",
    location: "Zimbabwe",
    whatsapp: "+263 78 767 9376",
    time: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.get("/sitemap.xml", (_req, res) => {
  const baseUrl = "https://www.webspectit.com";
  const routes = [
    "/",
    "/solutions",
    "/solutions/digital-presence",
    "/solutions/customer-enquiries",
    "/solutions/workflow-automation",
    "/solutions/business-operations",
    "/solutions/product-development",
    "/solutions/brand-visibility",
    "/products",
    "/products/mist",
    "/products/analytico-ai",
    "/products/relay-ai",
    "/products/lifeos",
    "/products/towmate",
    "/products/brandmind-ai",
    "/products/bible-gpt",
    "/products/plant-pulse-remote",
    "/products/clarity-ai",
    "/products/quotivo",
    "/products/zororo",
    "/work",
    "/work/multivate-construction",
    "/work/professional-mox",
    "/work/mist-civic-platform",
    "/work/happie-cosmetics-enterprise",
    "/work/general-aluminium-solutions",
    "/work/relay-automation-engine",
    "/work/dr-shana-healthcare",
    "/design-packages",
    "/resources",
    "/resources/what-should-a-business-website-help-customers-do",
    "/resources/is-your-business-ready-for-automation",
    "/resources/what-to-prepare-before-requesting-a-custom-system",
    "/resources/how-to-brief-a-designer-getting-visuals-that-sell",
    "/resources/website-internal-tool-or-mobile-app-which-do-you-need",
    "/company",
    "/contact",
    "/privacy",
    "/terms"
  ];
  const now = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(
    (r) => `  <url>
    <loc>${baseUrl}${r}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r === "/" || r.startsWith("/solutions") ? "weekly" : "monthly"}</changefreq>
    <priority>${r === "/" ? "1.0" : r.startsWith("/solutions") ? "0.9" : "0.8"}</priority>
  </url>`
  ).join("\n")}
</urlset>`;
  res.header("Content-Type", "application/xml");
  res.send(sitemapXml);
});
app.get("/robots.txt", (_req, res) => {
  res.header("Content-Type", "text/plain");
  res.send(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.webspectit.com/sitemap.xml
`);
});
app.get("/services", (_req, res) => {
  res.redirect(301, "/solutions");
});
app.get("/services/:slug", (req, res) => {
  res.redirect(301, `/solutions/${req.params.slug}`);
});
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), "dist");
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get("*", (_req, res) => {
        res.sendFile(path.resolve(distPath, "index.html"));
      });
    }
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Webspect AI & Dev server running at http://0.0.0.0:${PORT}`);
  });
}
startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
