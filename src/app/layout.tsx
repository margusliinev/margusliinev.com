import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { TITLE, DESCRIPTION, KEYWORDS, AUTHOR, BASE_URL } from '@/helpers/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: { template: `%s | ${TITLE}`, default: TITLE },
    applicationName: TITLE,
    description: DESCRIPTION,
    keywords: KEYWORDS,
    creator: AUTHOR,
    authors: [{ name: AUTHOR, url: BASE_URL }],
    metadataBase: new URL(BASE_URL),
    icons: {
        icon: [
            { url: '/images/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
            { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
        shortcut: '/images/favicon.ico',
    },
    manifest: '/manifest.json',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export const viewport: Viewport = {
    colorScheme: 'dark',
    themeColor: '#18181b',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`bg-background-dark text-foreground noise min-h-screen antialiased scheme-dark ${inter.className} `}>
                <div className='flex justify-center sm:px-8'>
                    <div className='flex w-full max-w-7xl lg:px-8'>
                        <div className='bg-background min-h-screen w-full ring-1 ring-zinc-300/20'>
                            <div className='h-full px-4 sm:px-8 lg:px-12'>
                                <div className='mx-auto grid h-full max-w-2xl grid-rows-[auto_1fr_auto] lg:max-w-5xl'>
                                    <Header />
                                    <main>{children}</main>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
