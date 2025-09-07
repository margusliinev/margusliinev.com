/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import styles from '../styles/index.css?url';
import type { ReactNode } from 'react';

const TITLE = 'Margus Liinev';
const DESCRIPTION = 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS, React.';
const SOCIAL_HANDLE = 'margusliinev';
const SOCIAL_CHANNEL = {
    linkedin: `https://linkedin.com/in/${SOCIAL_HANDLE}`,
    instagram: `https://instagram.com/${SOCIAL_HANDLE}`,
    facebook: `https://facebook.com/${SOCIAL_HANDLE}`,
    twitter: `https://twitter.com/${SOCIAL_HANDLE}`,
    github: `https://github.com/${SOCIAL_HANDLE}`,
};

const getTitle = (notFound?: boolean) => (notFound ? 'Page Not Found' : TITLE);
const getDescription = (notFound?: boolean) => (notFound ? 'Sorry, we couldn’t find the page you’re looking for.' : DESCRIPTION);
const getUrl = (loaderData: unknown) => (typeof loaderData === 'string' ? loaderData : 'https://margusliinev.com');

// Things I need to add once I have the images ready
// { name: 'image', content: 'cloudinary-url' },
// { name: 'twitter:card', content: 'summary_large_image' },
// { name: 'twitter:image', content: 'cloudinary-url' },
// { property: 'og:image', content: 'cloudinary-url' },

export const Route = createRootRoute({
    head: ({ match, loaderData }) => ({
        meta: [
            { charSet: 'utf-8' },
            { title: getTitle(match.globalNotFound) },
            { name: 'description', content: getDescription(match.globalNotFound) },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'keywords', content: 'Margus Liinev, Software Engineer, Full-Stack Developer, TypeScript, NodeJS, React' },
            { name: 'author', content: 'Margus Liinev' },
            { name: 'color-scheme', content: 'dark' },
            { name: 'theme-color', content: '#18181b' },
            { name: 'robots', content: 'index, follow' },
            { name: 'twitter:title', content: getTitle(match.globalNotFound) },
            { name: 'twitter:description', content: getDescription(match.globalNotFound) },
            { name: 'twitter:creator', content: `@${SOCIAL_HANDLE}` },
            { name: 'twitter:site', content: `@${SOCIAL_HANDLE}` },
            { name: 'twitter:card', content: 'summary' },
            { property: 'og:title', content: getTitle(match.globalNotFound) },
            { property: 'og:description', content: getDescription(match.globalNotFound) },
            { property: 'og:locale', content: 'en_US' },
            { property: 'og:site_name', content: 'Margus Liinev' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: getUrl(loaderData) },
        ],
        links: [
            { rel: 'stylesheet', href: styles },
            { rel: 'icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'canonical', href: getUrl(loaderData) },
            { rel: 'me', href: SOCIAL_CHANNEL.linkedin },
            { rel: 'me', href: SOCIAL_CHANNEL.instagram },
            { rel: 'me', href: SOCIAL_CHANNEL.facebook },
            { rel: 'me', href: SOCIAL_CHANNEL.twitter },
            { rel: 'me', href: SOCIAL_CHANNEL.github },
        ],
    }),
    loader: ({ location }) => location.url,
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
