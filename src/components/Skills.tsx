import Link from 'next/link';

export function Skills() {
    return (
        <section className='lg:flex-1'>
            <div className='xs:p-6 flex h-full flex-col rounded-2xl border border-zinc-100/10 p-4 lg:min-h-[400px]'>
                <h2 className='text-foreground flex items-center text-sm font-semibold'>
                    <ToolsIcon className='h-6 w-6 flex-none' />
                    <span className='ml-3'>Skills</span>
                </h2>
                <div className='mt-6 flex flex-grow flex-col'>
                    <ul className='flex flex-grow flex-col justify-between gap-3'>
                        <li className='flex items-center gap-3'>
                            <TypeScriptIcon className='h-8 w-8 flex-none' />
                            <span className='text-foreground text-sm'>JavaScript/TypeScript</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <NodeIcon className='h-8 w-8 flex-none' />
                            <span className='text-foreground text-sm'>Node.js, Express</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <ReactIcon className='h-8 w-8 flex-none' />
                            <span className='text-foreground text-sm'>React, Next.js</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <DockerIcon className='h-8 w-8 flex-none' />
                            <span className='text-foreground text-sm'>Docker, Git</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <DatabaseIcon className='h-8 w-8 flex-none' />
                            <span className='text-foreground text-sm'>PostgreSQL, MySQL, SQLite</span>
                        </li>
                    </ul>
                    <Link
                        href='/projects'
                        className='group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
                    >
                        View Projects
                        <ArrowRightIcon className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
            <path d='M8.75 4.75 12.25 8m0 0-3.5 3.25M12.25 8h-8.5' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}

function ToolsIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' {...props}>
            <path
                d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
                className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
            />
        </svg>
    );
}

function TypeScriptIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' {...props}>
            <rect x='2' y='2' width='20' height='20' rx='2' className='fill-blue-600 dark:fill-blue-500' />
            <text x='12' y='16' textAnchor='middle' className='fill-white text-xs font-bold' dominantBaseline='middle'>
                TS
            </text>
        </svg>
    );
}

function NodeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' {...props}>
            <path d='M12 2.5L3.5 7v10l8.5 4.5L20.5 17V7L12 2.5z' className='fill-green-700 dark:fill-green-600' strokeWidth='0.5' stroke='currentColor' />
            <path d='M12 2.5v19M3.5 7l8.5 4.5L20.5 7' className='stroke-green-900 dark:stroke-green-800' strokeWidth='0.5' fill='none' />
        </svg>
    );
}

function ReactIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' {...props}>
            <circle cx='12' cy='12' r='2' className='fill-cyan-500 dark:fill-cyan-400' />
            <ellipse cx='12' cy='12' rx='8' ry='3' className='stroke-cyan-500 dark:stroke-cyan-400' strokeWidth='1.5' />
            <ellipse cx='12' cy='12' rx='8' ry='3' transform='rotate(60 12 12)' className='stroke-cyan-500 dark:stroke-cyan-400' strokeWidth='1.5' />
            <ellipse cx='12' cy='12' rx='8' ry='3' transform='rotate(-60 12 12)' className='stroke-cyan-500 dark:stroke-cyan-400' strokeWidth='1.5' />
        </svg>
    );
}

function DockerIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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

function DatabaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' {...props}>
            <ellipse cx='12' cy='5' rx='9' ry='3' className='fill-purple-100 stroke-purple-500 dark:fill-purple-900/20 dark:stroke-purple-400' />
            <path d='M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5' className='stroke-purple-500 dark:stroke-purple-400' />
            <path d='M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3' className='stroke-purple-500 dark:stroke-purple-400' />
        </svg>
    );
}
