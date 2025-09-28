import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
    return (
        <div className={`xs:p-6 flex h-full flex-col rounded-2xl border border-zinc-100/10 p-4 lg:min-h-[400px] ${className}`} {...props}>
            {children}
        </div>
    );
}
