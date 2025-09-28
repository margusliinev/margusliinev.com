'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navigations = [
    { href: '/', label: 'Home' },
    { href: '/articles', label: 'Articles' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/uses', label: 'Uses' },
] as const;

export function Header() {
    const pathname = usePathname();

    return (
        <div className='flex flex-1 justify-center py-6'>
            <nav className='pointer-events-auto rounded-full'>
                <ul className='bg-background-light ring-foreground/10 flex items-center gap-1 rounded-full px-3 text-sm font-medium ring-1 backdrop:blur-sm'>
                    {navigations.map((navigation) => {
                        const isActive = navigation.href === pathname;
                        return (
                            <li key={navigation.href}>
                                <Link
                                    href={navigation.href}
                                    className={`relative block rounded-full px-3 py-2.5 transition-colors ${isActive ? 'text-primary-very-light' : 'text-foreground-muted hover:text-primary-very-light'}`}
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
    );
}
