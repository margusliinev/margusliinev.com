'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MobileButton } from '@/components/ui';
import { navigationItems } from '@/data';
import Link from 'next/link';

export function Header() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // MobileButton hack to open the mobile menu without prop drilling and
    // allowing custom location for the button in Hero component
    useEffect(() => {
        const handler = () => setIsMobileMenuOpen(true);
        window.addEventListener('open-mobile-menu', handler);
        return () => window.removeEventListener('open-mobile-menu', handler);
    }, []);

    const handleMobileMenuClose = () => setIsMobileMenuOpen(false);
    const handleMobileNavClick = () => setIsMobileMenuOpen(false);

    return (
        <>
            <div className='xs:flex hidden justify-center px-4 py-10'>
                <nav className='pointer-events-auto rounded-full'>
                    <ul className='bg-background-light ring-foreground/10 flex items-center gap-1 rounded-full px-3 text-sm font-medium ring-1 backdrop-blur-sm'>
                        {navigationItems.map((navigation) => {
                            const isActive = navigation.href === pathname;
                            return (
                                <li key={navigation.href}>
                                    <Link
                                        href={navigation.href}
                                        className={`relative block rounded-full px-2.5 py-2.5 transition-colors ${isActive ? 'text-primary-very-light' : 'text-foreground-muted hover:text-primary-very-light'}`}
                                    >
                                        {navigation.label}
                                        {isActive && <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-400/0 via-sky-400/40 to-sky-400/0' />}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            {!isHome && (
                <div className='xs:hidden flex justify-end pt-10 pb-8'>
                    <MobileButton />
                </div>
            )}

            {isMobileMenuOpen && (
                <div className='xs:hidden fixed inset-0 z-[60]'>
                    <div className='bg-background-dark/95 absolute inset-0 backdrop-blur-sm' onClick={handleMobileMenuClose} />

                    <div className='relative flex min-h-full items-center justify-center p-4'>
                        <div className='bg-background ring-foreground/10 relative w-full max-w-sm rounded-2xl p-8 ring-1 backdrop-blur-sm'>
                            <button onClick={handleMobileMenuClose} className='text-foreground-muted hover:text-foreground absolute top-4 right-4 p-1' aria-label='Close navigation menu'>
                                <svg className='h-6 w-6' fill='none' strokeWidth='2' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>

                            <nav className='flex min-h-[200px] items-center justify-center'>
                                <ul className='space-y-4'>
                                    {navigationItems.map((navigation) => {
                                        const isActive = navigation.href === pathname;
                                        return (
                                            <li key={navigation.href}>
                                                <Link
                                                    href={navigation.href}
                                                    onClick={handleMobileNavClick}
                                                    className={`block rounded-lg px-4 py-3 text-center text-lg font-medium transition-colors ${
                                                        isActive ? 'text-primary-very-light bg-primary-very-light/10' : 'text-foreground-muted hover:text-primary-very-light hover:bg-zinc-800/50'
                                                    }`}
                                                >
                                                    {navigation.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
