interface PagePlaceholderProps {
    title: string;
    description: string;
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
    return (
        <div className='flex flex-col justify-center py-16'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>{title}</h1>

            <div className='mt-8 flex justify-center'>
                <div className='flex flex-col items-center justify-center rounded-2xl border border-zinc-100 p-12 text-center dark:border-zinc-700/40'>
                    <h2 className='text-2xl font-semibold text-zinc-800 dark:text-zinc-100'>Coming Soon</h2>
                    <p className='mt-2 text-base text-zinc-600 dark:text-zinc-400'>{description}</p>
                </div>
            </div>
        </div>
    );
}
