import type { Metadata } from 'next';
import { createPageMetadata } from '@/helpers/seo';
import { Skills } from '@/components/Skills';
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';

export const metadata: Metadata = createPageMetadata({
    title: 'Home',
    description: 'Hey, my name is Margus Liinev. I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS, React. I currently work at Opus.',
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
