import type { ComponentPropsWithoutRef } from 'react';

export function ArrowRightIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
            <path d='M8.75 4.75 12.25 8m0 0-3.5 3.25M12.25 8h-8.5' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}

export function ArrowDownIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
            <path d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}

export function BriefcaseIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' {...props}>
            <path d='M2 7h20l-1 12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2L2 7ZM7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2' className='fill-zinc-100/10 stroke-zinc-500' />
            <path d='M8 7v4a4 4 0 0 0 8 0V7' className='stroke-zinc-500' />
        </svg>
    );
}

export function ToolsIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' {...props}>
            <path
                d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
                className='fill-zinc-100/10 stroke-zinc-500'
            />
        </svg>
    );
}
