import type { NextConfig } from 'next';

// NB! Add the following config when using Docker: output: 'standalone'

const nextConfig: NextConfig = {
    typedRoutes: true,
    experimental: { globalNotFound: true },
    logging: { incomingRequests: { ignore: [/\.(?:ico|svg|png|webmanifest)(?:\?.*)?$/] } },
};

export default nextConfig;
