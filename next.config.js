/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Enable experimental features
  experimental: {
    // Enable server actions if needed
    serverActions: {
      allowedOrigins: ['localhost:3000', 'mooz.farm'],
    },
  },
  async redirects() {
    return [
      {
        source: '/ipfs-cache-worker.js',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig 