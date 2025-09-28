import type { ComponentPropsWithoutRef, ReactElement } from 'react';

export interface NavigationItem {
    href: string;
    label: string;
}

export interface IconComponent {
    (props: ComponentPropsWithoutRef<'svg'>): ReactElement;
}

export interface IconMap {
    [key: string]: IconComponent;
}
