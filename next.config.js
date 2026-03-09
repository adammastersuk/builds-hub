/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/snake',
        destination: 'https://snake-modern-adammastersuks-projects.vercel.app/snake'
      },
      {
        source: '/snake/:path*',
        destination: 'https://snake-modern-adammastersuks-projects.vercel.app/snake/:path*'
      },
      {
        source: '/reaction-speed-test',
        destination: 'https://reaction-speed-test-opal.vercel.app/reaction-speed-test'
      },
      {
        source: '/reaction-speed-test/:path*',
        destination: 'https://reaction-speed-test-opal.vercel.app/reaction-speed-test/:path*'
      },
      {
        source: '/aim-trainer',
        destination: 'https://aim-trainer-neon.vercel.app'
      },
      {
        source: '/aim-trainer/',
        destination: 'https://aim-trainer-neon.vercel.app/'
      },
      {
        source: '/aim-trainer/:path*',
        destination: 'https://aim-trainer-neon.vercel.app/:path*'
      },
    ];
  }
};

module.exports = nextConfig;
