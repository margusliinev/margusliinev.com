import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    typedRoutes: true,
    experimental: { globalNotFound: true },
    logging: { incomingRequests: { ignore: [/\.(?:ico|svg|png|webmanifest)(?:\?.*)?$/] } },
    output: 'standalone',
};

export default nextConfig;
