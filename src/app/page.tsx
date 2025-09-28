import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';
import { createPageMetadata } from '@/helpers/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Home',
    description: 'Full-Stack Software Engineer specializing in TypeScript, NodeJS, React. Currently working at Opus. Building modern web applications.',
    path: '',
});

export default function Home() {
    return (
        <>
            <Hero />
            <div className='flex flex-col gap-8 lg:flex-row lg:items-stretch'>
                <Skills />
                <Work />
            </div>
        </>
    );
}
