import type { ComponentPropsWithoutRef } from 'react';

export function TypeScriptIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' {...props}>
            <rect x='2' y='2' width='20' height='20' rx='2' className='fill-blue-600 dark:fill-blue-500' />
            <text x='12' y='16' textAnchor='middle' className='fill-white text-xs font-bold' dominantBaseline='middle'>
                TS
            </text>
        </svg>
    );
}

export function NodeIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' {...props}>
            <path d='M12 2.5L3.5 7v10l8.5 4.5L20.5 17V7L12 2.5z' className='fill-green-700 dark:fill-green-600' strokeWidth='0.5' stroke='currentColor' />
            <path d='M12 2.5v19M3.5 7l8.5 4.5L20.5 7' className='stroke-green-900 dark:stroke-green-800' strokeWidth='0.5' fill='none' />
        </svg>
    );
}

export function ReactIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' {...props}>
            <circle cx='12' cy='12' r='2' className='fill-cyan-500 dark:fill-cyan-400' />
            <ellipse cx='12' cy='12' rx='8' ry='3' className='stroke-cyan-500 dark:stroke-cyan-400' strokeWidth='1.5' />
            <ellipse cx='12' cy='12' rx='8' ry='3' transform='rotate(60 12 12)' className='stroke-cyan-500 dark:stroke-cyan-400' strokeWidth='1.5' />
            <ellipse cx='12' cy='12' rx='8' ry='3' transform='rotate(-60 12 12)' className='stroke-cyan-500 dark:stroke-cyan-400' strokeWidth='1.5' />
        </svg>
    );
}

export function DockerIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' {...props}>
            <rect x='3' y='10' width='3' height='2' className='fill-blue-500 dark:fill-blue-400' />
            <rect x='7' y='8' width='3' height='4' className='fill-blue-500 dark:fill-blue-400' />
            <rect x='11' y='6' width='3' height='6' className='fill-blue-500 dark:fill-blue-400' />
            <rect x='15' y='8' width='3' height='4' className='fill-blue-500 dark:fill-blue-400' />
            <path d='M3 14c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-2H3v2z' className='stroke-blue-500 dark:stroke-blue-400' strokeWidth='1.5' />
        </svg>
    );
}

export function DatabaseIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' {...props}>
            <ellipse cx='12' cy='5' rx='9' ry='3' className='fill-purple-100 stroke-purple-500 dark:fill-purple-900/20 dark:stroke-purple-400' />
            <path d='M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5' className='stroke-purple-500 dark:stroke-purple-400' />
            <path d='M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3' className='stroke-purple-500 dark:stroke-purple-400' />
        </svg>
    );
}
