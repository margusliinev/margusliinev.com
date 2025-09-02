import type { Route } from './+types/root';
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './styles/index.css';

export const links: Route.LinksFunction = () => [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'canonical', href: 'https://margusliinev.com/' },
    { rel: 'me', href: 'https://www.linkedin.com/in/margusliinev' },
    { rel: 'me', href: 'https://www.instagram.com/margusliinev' },
    { rel: 'me', href: 'https://twitter.com/margusliinev' },
    { rel: 'me', href: 'https://github.com/margusliinev' },
];

export const meta: Route.MetaFunction = () => [
    { charSet: 'utf-8' },
    { title: 'Margus Liinev' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    { name: 'description', content: 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS and React.' },
    { name: 'keywords', content: 'Margus Liinev, software engineer, full stack developer, typescript, nodejs, react' },
    { name: 'color-scheme', content: 'dark light' },
    { name: 'robots', content: 'index, follow' },
    { name: 'application-name', content: 'Margus Liinev' },
    { name: 'author', content: 'Margus Liinev' },
    { name: 'theme-color', content: '#18181b' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Margus Liinev' },
    { name: 'twitter:description', content: 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS and React.' },
    { property: 'og:title', content: 'Margus Liinev' },
    { property: 'og:description', content: 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS and React.' },
    { property: 'og:url', content: 'https://margusliinev.com/' },
    { property: 'og:site_name', content: 'Margus Liinev' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_US' },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = 'Oops!';
    let details = 'An unexpected error occurred.';
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? '404' : 'Error';
        details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className='pt-16 p-4 container mx-auto'>
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className='w-full p-4 overflow-x-auto'>
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
