
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this line to enable static HTML export
  output: {
    // If you have assets (like images) in the public folder, set this to true
    // Otherwise, you can remove the line below
    assetPrefix: '',
    // This will create an export folder containing the static HTML files
    // that can be served directly or deployed to a static hosting service.
    exportTrailingSlash: true,
    output: 'export',
  },
};

module.exports = nextConfig;

