import { createFileRoute } from '@tanstack/react-router';
import { seoMeta } from '../helpers/seo';

export const Route = createFileRoute('/')({
    head: () => ({
        meta: seoMeta({ title: 'Home', description: 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS, React.' }),
    }),
    component: Home,
});

function Home() {
    return (
        <main className='grid min-h-screen place-items-center'>
            <div className='flex flex-wrap gap-4'>
                <button className='bg-success hover:bg-success-dark cursor-pointer rounded-md px-3 py-2 transition-colors'>Success</button>
                <button className='bg-warning hover:bg-warning-dark cursor-pointer rounded-md px-3 py-2 transition-colors'>Warning</button>
                <button className='bg-error hover:bg-error-dark cursor-pointer rounded-md px-3 py-2 transition-colors'>Error</button>
                <button className='bg-info hover:bg-info-dark cursor-pointer rounded-md px-3 py-2 transition-colors'>Info</button>
                <button className='bg-primary hover:bg-primary-dark cursor-pointer rounded-md px-3 py-2 transition-colors'>Primary</button>
            </div>
        </main>
    );
}
