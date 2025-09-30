interface PlaceholderProps {
    title: string;
    description: string;
}

export function Placeholder({ title, description }: PlaceholderProps) {
    return (
        <div className='xs:pt-10 flex flex-col justify-center'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl'>{title}</h1>

            <div className='mt-8 flex justify-center'>
                <div className='flex flex-col items-center justify-center rounded-2xl border border-zinc-700/40 p-12 text-center'>
                    <h2 className='text-2xl font-semibold text-zinc-100'>Coming Soon</h2>
                    <p className='mt-2 text-base text-zinc-400'>{description}</p>
                </div>
            </div>
        </div>
    );
}
