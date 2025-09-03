import type { Route } from './+types/root';
import { isRouteErrorResponse, Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { seoErrorTitle } from './helpers/seo';
import './styles/index.css';

export const links: Route.LinksFunction = () => [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'me', href: 'https://www.linkedin.com/in/margusliinev' },
    { rel: 'me', href: 'https://www.instagram.com/margusliinev' },
    { rel: 'me', href: 'https://www.facebook.com/margusliinev' },
    { rel: 'me', href: 'https://twitter.com/margusliinev' },
    { rel: 'me', href: 'https://github.com/margusliinev' },
    { rel: 'me', href: 'https://x.com/margusliinev' },
];

export const meta: Route.MetaFunction = ({ error }) => [
    { charSet: 'utf-8' },
    { title: seoErrorTitle(error) },
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
    { name: 'twitter:site', content: '@margusliinev' },
    { name: 'twitter:creator', content: '@margusliinev' },
    { property: 'og:title', content: 'Margus Liinev' },
    { property: 'og:description', content: 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS and React.' },
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
    if (isRouteErrorResponse(error) && error.status === 404) return <NotFound />;
    return <InternalServerError />;
}

function NotFound() {
    return (
        <main className='grid place-items-center min-h-screen text-center'>
            <div>
                <h2 className='text-primary-light text-5xl font-bold'>404</h2>
                <h1 className='text-6xl font-bold py-4'>Page Not Found</h1>
                <p className='text-foreground-secondary text-lg'>Sorry, we couldn’t find the page you’re looking for.</p>
                <nav aria-label='Return home' className='py-4 flex gap-4 justify-self-center items-center'>
                    <Link
                        to='/'
                        reloadDocument
                        className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-white transition-colors'
                    >
                        Back to Home
                    </Link>
                    <Link to='/' reloadDocument className='text-sm font-semibold text-white'>
                        Contact support <span aria-hidden='true'>&rarr;</span>
                    </Link>
                </nav>
            </div>
        </main>
    );
}

function InternalServerError() {
    return (
        <main className='grid place-items-center min-h-screen text-center'>
            <div>
                <h2 className='text-primary-light text-5xl font-bold'>500</h2>
                <h1 className='text-6xl font-bold py-4'>Internal Server Error</h1>
                <p className='text-foreground-secondary text-lg'>Sorry, something went wrong on our end. Please try again later.</p>
                <nav aria-label='Actions' className='py-4 flex gap-4 justify-self-center items-center'>
                    <Link
                        to='/'
                        reloadDocument
                        className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-white
                    transition-colors'
                    >
                        Back to Home
                    </Link>
                    <Link to='/' reloadDocument className='text-sm font-semibold text-white'>
                        Contact support <span aria-hidden='true'>&rarr;</span>
                    </Link>
                </nav>
            </div>
        </main>
    );
}
