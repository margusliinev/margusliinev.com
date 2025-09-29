import type { Metadata } from 'next';
import { createPageMetadata } from '@/helpers/seo';
import { Skills } from '@/components/Skills';
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';

export const metadata: Metadata = createPageMetadata({
    title: 'Home',
    description:
        "I'm Margus and I like to build things. I work as a software developer with a focus on TypeScript, Node.js, and React. I’ve been in the field for the past few years, and I’m currently working full-time at Opus.",
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
