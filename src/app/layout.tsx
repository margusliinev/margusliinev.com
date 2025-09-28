import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { TITLE, BASE_URL, AUTHOR, KEYWORDS } from '@/helpers/seo';
import { Header, MobileMenuProvider } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    keywords: KEYWORDS,
    authors: [{ name: AUTHOR, url: BASE_URL }],
    creator: AUTHOR,
    applicationName: TITLE,
    metadataBase: new URL(BASE_URL),
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
            <body className={`bg-background-dark text-foreground min-h-screen antialiased scheme-dark ${inter.className}`}>
                <MobileMenuProvider>
                    <div className='flex justify-center sm:px-8'>
                        <div className='flex w-full max-w-7xl lg:px-8'>
                            <div className='bg-background noise min-h-screen w-full ring-1 ring-zinc-300/20'>
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
                </MobileMenuProvider>
            </body>
        </html>
    );
}
