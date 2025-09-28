'use client';

import { useMobileMenu } from '@/components/Header';

export function MobileMenuButton() {
    const { setIsMobileMenuOpen } = useMobileMenu();

    return (
        <div className='xs:hidden mb-6 flex justify-end'>
            <button
                className='bg-background-light ring-foreground/10 pointer-events-auto flex items-center gap-2 rounded-full px-4 py-3 ring-1 backdrop-blur-sm'
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label='Open navigation menu'
            >
                <span className='text-foreground-muted text-sm font-medium'>Menu</span>
                <svg className='text-foreground-muted h-5 w-5' fill='none' strokeWidth='2' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
            </button>
        </div>
    );
}
