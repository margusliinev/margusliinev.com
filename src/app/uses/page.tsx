import type { Metadata } from 'next';
import { CategorySection } from '@/components/CategorySection';
import { createPageMetadata } from '@/helpers/seo';
import { usesData } from '@/data';

export const metadata: Metadata = createPageMetadata({
    title: 'Uses',
    description: 'The tools, hardware, and software I use to get things done.',
});

export default function Uses() {
    return (
        <div className='xs:pt-10'>
            <div className='max-w-2xl space-y-6'>
                <h1 className='text-foreground text-3xl font-bold tracking-tight sm:text-4xl'>Uses</h1>
                <p className='text-foreground-muted text-base leading-7'>The stuff I use on a regular basis.</p>
            </div>

            <div className='mt-16 space-y-16 sm:mt-20 sm:space-y-20'>
                {usesData.map((category, index) => (
                    <CategorySection key={index} category={category} />
                ))}
            </div>
        </div>
    );
}
