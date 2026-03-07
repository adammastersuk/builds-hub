/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/snake/:path*',
        destination: 'https://snake-build.vercel.app/:path*'
      },
      {
        source: '/snake',
        destination: 'https://snake-build.vercel.app'
      },
      {
        source: '/reaction-speed-test/:path*',
        destination: 'https://reaction-test.vercel.app/:path*'
      },
      {
        source: '/reaction-speed-test',
        destination: 'https://reaction-test.vercel.app'
      }
    ];
  }
};

module.exports = nextConfig;
