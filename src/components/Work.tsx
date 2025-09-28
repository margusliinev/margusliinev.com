import Image from 'next/image';

export function Work() {
    return (
        <section className='lg:flex-1'>
            <div className='xs:p-6 flex h-full flex-col rounded-2xl border border-zinc-100/10 p-4 lg:min-h-[400px]'>
                <h2 className='text-foreground flex items-center text-sm font-semibold'>
                    <BriefcaseIcon className='h-6 w-6 flex-none' />
                    <span className='ml-3'>Work</span>
                </h2>
                <ol className='mt-6 flex-grow space-y-4'>
                    <li className='flex gap-4'>
                        <div className='relative mt-1 -ml-1.5 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                            <Image src='/images/opus.jpg' alt='Opus logo' className='h-7 w-7 rounded-full object-cover' width={28} height={28} />
                        </div>
                        <dl className='flex flex-auto flex-wrap gap-x-2'>
                            <dt className='sr-only'>Company</dt>
                            <dd className='text-foreground w-full flex-none text-sm font-medium'>Opus</dd>
                            <dt className='sr-only'>Role</dt>
                            <dd className='text-foreground-muted text-xs'>Software Developer</dd>
                            <dt className='sr-only'>Date</dt>
                            <dd className='text-foreground-muted xs:block ml-auto hidden text-xs' aria-label='Oct 2025 until Present'>
                                <time dateTime='2025-10'>Oct 2025</time> <span aria-hidden='true'>—</span> Present
                            </dd>
                        </dl>
                    </li>
                    <li className='flex gap-4'>
                        <div className='relative mt-1 -ml-1.5 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                            <Image src='/images/pipedrive.png' alt='Pipedrive logo' className='h-7 w-7 rounded-full object-cover' width={28} height={28} />
                        </div>
                        <dl className='flex flex-auto flex-wrap gap-x-2'>
                            <dt className='sr-only'>Company</dt>
                            <dd className='text-foreground w-full flex-none text-sm font-medium'>Pipedrive</dd>
                            <dt className='sr-only'>Role</dt>
                            <dd className='text-foreground-muted text-xs'>Software Engineer</dd>
                            <dt className='sr-only'>Date</dt>
                            <dd className='text-foreground-muted xs:block ml-auto hidden text-xs' aria-label='Jun 2024 until Oct 2025'>
                                <time dateTime='2024-06'>Jun 2024</time> <span aria-hidden='true'>—</span> <time dateTime='2025-10'>Oct 2025</time>
                            </dd>
                        </dl>
                    </li>
                    <li className='flex gap-4'>
                        <div className='relative mt-1 -ml-1.5 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                            <Image src='/images/kuehnenagel.jpg' alt='Kuehne+Nagel logo' className='h-7 w-7 rounded-full object-cover' width={28} height={28} />
                        </div>
                        <dl className='flex flex-auto flex-wrap gap-x-2'>
                            <dt className='sr-only'>Company</dt>
                            <dd className='text-foreground w-full flex-none text-sm font-medium'>Kuehne+Nagel</dd>
                            <dt className='sr-only'>Role</dt>
                            <dd className='text-foreground-muted text-xs'>Frontend Developer Internship</dd>
                            <dt className='sr-only'>Date</dt>
                            <dd className='text-foreground-muted xs:block ml-auto hidden text-xs' aria-label='Oct 2023 until Dec 2023'>
                                <time dateTime='2023-10'>Oct 2023</time> <span aria-hidden='true'>—</span> <time dateTime='2023-12'>Dec 2023</time>
                            </dd>
                        </dl>
                    </li>
                    <li className='flex gap-4'>
                        <div className='relative mt-1 -ml-1.5 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                            <Image src='/images/starship.jpeg' alt='Starship Technologies logo' className='h-7 w-7 rounded-full object-cover' width={28} height={28} />
                        </div>
                        <dl className='flex flex-auto flex-wrap gap-x-2'>
                            <dt className='sr-only'>Company</dt>
                            <dd className='text-foreground w-full flex-none text-sm font-medium'>Starship Technologies</dd>
                            <dt className='sr-only'>Role</dt>
                            <dd className='text-foreground-muted text-xs'>Customer Support</dd>
                            <dt className='sr-only'>Date</dt>
                            <dd className='text-foreground-muted xs:block ml-auto hidden text-xs' aria-label='Mar 2022 until May 2024'>
                                <time dateTime='2022-03'>Mar 2022</time> <span aria-hidden='true'>—</span> <time dateTime='2024-05'>May 2024</time>
                            </dd>
                        </dl>
                    </li>
                </ol>
                <button className='group mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'>
                    Download CV
                    <ArrowDownIcon className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
                </button>
            </div>
        </section>
    );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
            <path d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' fill='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' {...props}>
            <path d='M2 7h20l-1 12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2L2 7ZM7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2' className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500' />
            <path d='M8 7v4a4 4 0 0 0 8 0V7' className='stroke-zinc-400 dark:stroke-zinc-500' />
        </svg>
    );
}
