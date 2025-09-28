import { NextResponse } from 'next/server';

export function middleware() {
    const response = NextResponse.next();

    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('X-DNS-Prefetch-Control', 'on');

    const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "font-src 'self' data:",
        "connect-src 'self'",
        "frame-ancestors 'none'",
    ].join('; ');

    response.headers.set('Content-Security-Policy', csp);

    return response;
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
    runtime: 'nodejs',
};
