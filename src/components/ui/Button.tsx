import type { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

interface ButtonProps extends BaseButtonProps, Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
    as?: 'button';
}

interface LinkButtonProps extends BaseButtonProps, Omit<ComponentPropsWithoutRef<typeof Link>, 'className'> {
    as: 'link';
}

type ButtonComponentProps = ButtonProps | LinkButtonProps;

const buttonVariants = {
    primary:
        'bg-zinc-50 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
    secondary: 'bg-primary-dark text-white hover:bg-primary focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2 shadow-xs',
};

const buttonSizes = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-3.5 py-2.5 text-sm',
};

export function Button({ variant = 'primary', size = 'md', children, className = '', as = 'button', ...props }: ButtonComponentProps) {
    const baseClasses = `group inline-flex w-full items-center justify-center gap-2 rounded-md font-medium outline-offset-2 transition active:transition-none ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;

    if (as === 'link') {
        const linkProps = props as ComponentPropsWithoutRef<typeof Link>;
        return (
            <Link className={baseClasses} {...linkProps}>
                {children}
            </Link>
        );
    }

    const buttonProps = props as ComponentPropsWithoutRef<'button'>;
    return (
        <button className={baseClasses} {...buttonProps}>
            {children}
        </button>
    );
}
