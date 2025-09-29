import type { Metadata } from 'next';
import { createPageMetadata } from '@/helpers/seo';
import { usesData } from '@/data';
import { CategorySection } from '@/components/CategorySection';
import { MobileMenuButton } from '@/components/MobileMenuButton';

export const metadata: Metadata = createPageMetadata({
    title: 'Uses',
    description: 'Hardware, software, and tools I use daily for development. MacBook Pro M4 Max, VSCode, Railway, TablePlus, and more recommendations for productive software engineering.',
    path: '/uses',
});

export default function Uses() {
    return (
        <div className='pt-12.5 pb-16 sm:pb-20'>
            <MobileMenuButton />
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
