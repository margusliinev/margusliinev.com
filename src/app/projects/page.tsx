import type { Metadata } from 'next';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import { createPageMetadata } from '@/helpers/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Projects',
    description: "A collection of projects I've worked on over the years. From professional applications to personal experiments.",
});

export default function Projects() {
    return <PagePlaceholder title='Projects' description="A collection of projects I've worked on over the years. From professional applications to personal experiments." />;
}
