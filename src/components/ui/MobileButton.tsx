'use client';

import type { ButtonHTMLAttributes, MouseEvent } from 'react';

export type MobileButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function MobileButton({ className = '', onClick, ...rest }: MobileButtonProps) {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        // Small hack to avoid prop drilling.
        // Notify Header to open the mobile menu
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('open-mobile-menu'));
        }
        onClick?.(e);
    };

    return (
        <button
            className={`bg-background-light ring-foreground/10 pointer-events-auto flex items-center gap-2 rounded-full px-4 py-3 ring-1 backdrop-blur-sm ${className}`}
            onClick={handleClick}
            aria-label='Open navigation menu'
            {...rest}
        >
            <span className='text-foreground-muted text-sm font-medium'>Menu</span>
            <svg className='text-foreground-muted h-5 w-5' fill='none' strokeWidth='2' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
        </button>
    );
}
