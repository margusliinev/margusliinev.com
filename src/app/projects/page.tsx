import type { Metadata } from 'next';
import { Placeholder } from '@/components/Placeholder';
import { createPageMetadata } from '@/helpers/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Projects | Margus Liinev',
    description: "A collection of projects I've worked on over the years. From professional applications to personal experiments.",
});

export default function Projects() {
    return (
        <Placeholder
            title='Projects'
            description='Projects I have worked on will be added here soon. This will include projects from professional applications to personal experiments and fun side projects.'
        />
    );
}
