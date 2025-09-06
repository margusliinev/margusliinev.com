import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function createRouter() {
    const router = createTanStackRouter({
        routeTree,
        scrollRestoration: true,
        defaultErrorComponent: ({ error }) => <div>Error: {error.message}</div>,
        defaultNotFoundComponent: () => <div>404 Not Found!</div>,
    });

    return router;
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
