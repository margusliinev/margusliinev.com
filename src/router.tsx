import { createRouter as createTanStackRouter, Link } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function createRouter() {
    const router = createTanStackRouter({
        routeTree,
        scrollRestoration: true,
        defaultErrorComponent: () => <ErrorPage />,
        defaultNotFoundComponent: () => <NotFoundPage />,
    });

    return router;
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}

function ErrorPage() {
    return (
        <main className='grid min-h-screen place-items-center text-center'>
            <div className='px-4'>
                <h2 className='text-primary-light text-5xl font-bold'>500</h2>
                <h1 className='py-4 text-6xl font-bold'>Internal Server Error</h1>
                <p className='text-foreground-muted text-lg'>Sorry, something went wrong on our end. Please try again later.</p>
                <nav aria-label='Actions' className='flex items-center gap-4 justify-self-center py-4'>
                    <Link
                        to='/'
                        reloadDocument
                        className='bg-primary hover:bg-primary-light focus-visible:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'
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

function NotFoundPage() {
    return (
        <main className='grid min-h-screen place-items-center text-center'>
            <div className='px-4'>
                <h2 className='text-primary-light text-5xl font-bold'>404</h2>
                <h1 className='py-4 text-6xl font-bold'>Page Not Found</h1>
                <p className='text-foreground-muted text-lg'>Sorry, we couldn’t find the page you’re looking for.</p>
                <nav aria-label='Return home' className='flex items-center gap-4 justify-self-center py-4'>
                    <Link
                        to='/'
                        reloadDocument
                        className='bg-primary hover:bg-primary-light focus-visible:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'
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
