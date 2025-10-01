import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    typedRoutes: true,
    experimental: { globalNotFound: true },
    logging: { incomingRequests: false },
    output: 'standalone',
};

export default nextConfig;
