/// <reference types="vite/client" />
import type { ReactNode } from 'react';
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import css from '../styles/index.css?url';

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: 'utf-8' },
            { title: 'Margus Liinev' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS, React.' },
            { name: 'keywords', content: 'Margus Liinev, Software Engineer, Full-Stack Developer, TypeScript, NodeJS, React' },
            { name: 'application-name', content: 'Margus Liinev' },
            { name: 'author', content: 'Margus Liinev' },
            { name: 'color-scheme', content: 'dark light' },
            { name: 'theme-color', content: '#18181b' },
            { name: 'robots', content: 'index, follow' },
            { name: 'twitter:title', content: 'Margus Liinev' },
            { name: 'twitter:description', content: 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS, React.' },
            { name: 'twitter:creator', content: '@margusliinev' },
            { name: 'twitter:site', content: '@margusliinev' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { property: 'og:title', content: 'Margus Liinev' },
            { property: 'og:description', content: 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS, React.' },
            { property: 'og:site_name', content: 'Margus Liinev' },
            { property: 'og:locale', content: 'en_US' },
            { property: 'og:type', content: 'website' },
        ],
        links: [
            { rel: 'stylesheet', href: css },
            { rel: 'icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'me', href: 'https://linkedin.com/in/margusliinev' },
            { rel: 'me', href: 'https://instagram.com/margusliinev' },
            { rel: 'me', href: 'https://facebook.com/margusliinev' },
            { rel: 'me', href: 'https://twitter.com/margusliinev' },
            { rel: 'me', href: 'https://github.com/margusliinev' },
            { rel: 'me', href: 'https://x.com/margusliinev' },
        ],
    }),
    component: Root,
});

function Root() {
    return (
        <Document>
            <Outlet />
            {import.meta.env.MODE !== 'production' && <TanStackRouterDevtools position='bottom-right' />}
        </Document>
    );
}

function Document({ children }: { children: ReactNode }) {
    return (
        <html lang='en' className='scroll-smooth'>
            <head>
                <HeadContent />
            </head>
            <body className='bg-background text-foreground font-inter antialiased scheme-dark'>
                {children}
                <Scripts />
            </body>
        </html>
    );
}
