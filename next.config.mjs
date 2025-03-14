const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        pathname: '/**',
      }
    ],
  }
}

export default nextConfig

