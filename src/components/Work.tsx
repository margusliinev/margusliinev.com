import Image from 'next/image';
import { workExperience } from '@/data';
import { BriefcaseIcon, ArrowDownIcon } from '@/components/icons';
import { Card } from '@/components/ui';
import { formatDateRange } from '@/lib';

export function Work() {
    return (
        <section className='lg:flex-1'>
            <Card>
                <h2 className='text-foreground flex items-center text-sm font-semibold'>
                    <BriefcaseIcon className='h-6 w-6 flex-none' />
                    <span className='ml-3'>Work</span>
                </h2>
                <ol className='mt-6 flex-grow space-y-4'>
                    {workExperience.map((job) => (
                        <li key={`${job.company}-${job.startDate}`} className='flex gap-4'>
                            <div className='relative mt-1 -ml-1.5 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                                <Image src={job.logo} alt={`${job.company} logo`} className='h-7 w-7 rounded-full object-cover' width={28} height={28} />
                            </div>
                            <dl className='flex flex-auto flex-wrap gap-x-2'>
                                <dt className='sr-only'>Company</dt>
                                <dd className='text-foreground w-full flex-none text-sm font-medium'>{job.company}</dd>
                                <dt className='sr-only'>Role</dt>
                                <dd className='text-foreground-muted text-xs'>{job.role}</dd>
                                <dt className='sr-only'>Date</dt>
                                <dd className='text-foreground-muted xs:block ml-auto hidden text-xs' aria-label={formatDateRange(job.startDate, job.endDate)}>
                                    {formatDateRange(job.startDate, job.endDate)}
                                </dd>
                            </dl>
                        </li>
                    ))}
                </ol>
                <a
                    href='/cv.pdf'
                    download='Margus_Liinev_CV.pdf'
                    className='group mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
                    aria-label='Download CV as PDF'
                >
                    Download CV
                    <ArrowDownIcon className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
                </a>
            </Card>
        </section>
    );
}
