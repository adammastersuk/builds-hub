/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/snake',
        destination: 'https://snake-modern-adammastersuks-projects.vercel.app',
      },
      {
  source: '/snake/:path*',
  destination: 'https://snake-modern-adammastersuks-projects.vercel.app/:path*',
},
      {
        source: '/reaction-speed-test',
        destination: 'https://reaction-speed-test-opal.vercel.app',
      },
      {
        source: '/reaction-speed-test/:path*',
        destination: 'https://reaction-speed-test-opal.vercel.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;