import type { MetadataRoute } from 'next';
import { TITLE, DESCRIPTION } from '@/helpers/seo';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: TITLE,
        short_name: 'ML',
        description: DESCRIPTION,
        start_url: '/',
        display: 'standalone',
        background_color: '#18181b',
        theme_color: '#18181b',
        icons: [
            { src: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
            { src: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
    };
}
