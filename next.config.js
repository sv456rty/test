/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { optimizeCss: true },

  // https://stackoverflow.com/questions/62077589/setting-cache-control-header-for-static-file-serving-on-nextjs-default-server
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|ico)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
