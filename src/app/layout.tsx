import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { TITLE, DESCRIPTION, KEYWORDS, BASE_URL, AUTHOR, SOCIAL } from '@/helpers/seo';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: KEYWORDS,
    authors: [{ name: AUTHOR, url: BASE_URL }],
    creator: AUTHOR,
    applicationName: TITLE,
    metadataBase: new URL(BASE_URL),
    alternates: {
        canonical: BASE_URL,
    },
    appLinks: {
        web: { url: BASE_URL },
    },
    appleWebApp: {
        title: TITLE,
    },
    twitter: {
        title: TITLE,
        description: DESCRIPTION,
        creator: SOCIAL,
        site: SOCIAL,
        card: 'summary',
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        siteName: TITLE,
        locale: 'en_US',
        type: 'website',
        url: BASE_URL,
    },
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
            <body className={`bg-background text-foreground gradient noise antialiased scheme-dark ${inter.className}`}>
                <div className='fixed inset-0 flex justify-center sm:px-8'>
                    <div className='flex w-full max-w-7xl lg:px-8'>
                        <div className='bg-background w-full ring-1 ring-zinc-300/20'>
                            <Header />
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
