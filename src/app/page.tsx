import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { Skills } from '@/components/Skills';

export default async function Home() {
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
