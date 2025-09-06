/// <reference types="vite/client" />
import type { ReactNode } from 'react';
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import styles from '../styles/index.css?url';

const SITE_NAME = 'Margus Liinev';
const DESCRIPTION = 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS, React.';
const BASE_URL = 'https://margusliinev.com';
const SOCIAL_HANDLE = 'margusliinev';
const SOCIAL = {
    linkedin: `https://linkedin.com/in/${SOCIAL_HANDLE}`,
    instagram: `https://instagram.com/${SOCIAL_HANDLE}`,
    facebook: `https://facebook.com/${SOCIAL_HANDLE}`,
    twitter: `https://twitter.com/${SOCIAL_HANDLE}`,
    github: `https://github.com/${SOCIAL_HANDLE}`,
    x: `https://x.com/${SOCIAL_HANDLE}`,
};

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: 'utf-8' },
            { title: SITE_NAME },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: DESCRIPTION },
            { name: 'keywords', content: 'Margus Liinev, Software Engineer, Full-Stack Developer, TypeScript, NodeJS, React' },
            { name: 'application-name', content: SITE_NAME },
            { name: 'author', content: SITE_NAME },
            { name: 'color-scheme', content: 'dark' },
            { name: 'theme-color', content: '#18181b' },
            { name: 'robots', content: 'index, follow' },
            { name: 'twitter:title', content: SITE_NAME },
            { name: 'twitter:description', content: DESCRIPTION },
            { name: 'twitter:creator', content: `@${SOCIAL_HANDLE}` },
            { name: 'twitter:site', content: `@${SOCIAL_HANDLE}` },
            { name: 'twitter:card', content: 'summary_large_image' },
            { property: 'og:title', content: SITE_NAME },
            { property: 'og:description', content: DESCRIPTION },
            { property: 'og:site_name', content: SITE_NAME },
            { property: 'og:locale', content: 'en_US' },
            { property: 'og:type', content: 'website' },
        ],
        links: [
            { rel: 'stylesheet', href: styles },
            { rel: 'icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'me', href: SOCIAL.linkedin },
            { rel: 'me', href: SOCIAL.instagram },
            { rel: 'me', href: SOCIAL.facebook },
            { rel: 'me', href: SOCIAL.twitter },
            { rel: 'me', href: SOCIAL.github },
            { rel: 'me', href: SOCIAL.x },
        ],
        scripts: [
            {
                type: 'application/ld+json',
                children: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Person',
                    name: SITE_NAME,
                    url: BASE_URL,
                    description: DESCRIPTION,
                    sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.facebook, SOCIAL.twitter, SOCIAL.github, SOCIAL.x],
                }),
            },
        ],
    }),
    component: Root,
});

function Root() {
    return (
        <Document>
            <Outlet />
            {import.meta.env.DEV && <TanStackRouterDevtools position='bottom-right' />}
        </Document>
    );
}

function Document({ children }: { children: ReactNode }) {
    return (
        <html lang='en' className='scroll-smooth'>
            <head>
                <HeadContent />
            </head>
            <body className='bg-background text-foreground font-inter gradient noise antialiased scheme-dark'>
                {children}
                <Scripts />
            </body>
        </html>
    );
}
