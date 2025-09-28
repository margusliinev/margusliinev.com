import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    typedRoutes: true,
    experimental: {
        globalNotFound: true,
        optimizePackageImports: ['@/components/icons', '@/components/ui'],
    },
    logging: {
        incomingRequests: {
            ignore: [/\.(?:ico|svg|png|webmanifest)(?:\?.*)?$/],
        },
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    output: 'standalone',
};

export default nextConfig;
