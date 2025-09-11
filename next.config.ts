import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    typedRoutes: true,
    experimental: { globalNotFound: true },
    logging: { incomingRequests: { ignore: [/^\/favicon\.ico$/] } },
    output: 'standalone',
};

export default nextConfig;
