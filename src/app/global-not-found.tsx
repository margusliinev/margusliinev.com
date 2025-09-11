import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: '404 - Not Found',
    description: 'Sorry, we couldn’t find the page you’re looking for.',
};

export default function GlobalNotFound() {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`bg-background text-foreground gradient noise antialiased scheme-dark ${inter.className}`}>
                <main className='grid min-h-screen place-items-center text-center'>
                    <div className='px-4'>
                        <h2 className='text-primary-light text-5xl font-bold'>404</h2>
                        <h1 className='xs:text-6xl py-4 text-5xl font-bold'>Not Found</h1>
                        <p className='text-foreground-muted text-lg'>Sorry, we couldn’t find the page you’re looking for.</p>
                        <nav aria-label='Return home' className='flex items-center gap-4 justify-self-center py-4'>
                            <Link
                                href='/'
                                className='bg-primary-dark hover:bg-primary focus-visible:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'
                            >
                                Back to Home
                            </Link>
                            <Link href='/' className='text-sm font-semibold text-white'>
                                Contact support <span aria-hidden='true'>&rarr;</span>
                            </Link>
                        </nav>
                    </div>
                </main>
            </body>
        </html>
    );
}
