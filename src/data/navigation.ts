export interface NavigationItem {
    href: '/' | '/articles' | '/projects' | '/contact' | '/uses';
    label: string;
}

export const navigationItems: NavigationItem[] = [
    { href: '/', label: 'Home' },
    { href: '/articles', label: 'Articles' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/uses', label: 'Uses' },
] as const;
