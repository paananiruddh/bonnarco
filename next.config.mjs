/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages can only serve static files — no Node server, so no
  // /api/enquiry. Set STATIC_EXPORT=true to build that variant (see
  // "npm run build:pages"). The default build (used on Vercel or any
  // Node host) keeps the real API route working.
  //
  // No basePath: the site is served from bonnarandco.com.au's root via
  // the CNAME file on the gh-pages branch, not from a github.io subpath.
  ...(isStaticExport && {
    output: "export",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
