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
            <nav className='pointer-events-auto'>
                <ul className='bg-background-light ring-foreground/10 flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium ring-1 backdrop:blur-sm'>
                    {navigations.map((navigation) => {
                        const isActive = navigation.href === pathname;
                        return (
                            <li key={navigation.href}>
                                <Link
                                    href={navigation.href}
                                    className={`block rounded-full px-3 py-2 transition-colors ${isActive ? 'text-primary-very-light' : 'text-foreground-muted hover:text-primary-very-light'}`}
                                >
                                    {navigation.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
