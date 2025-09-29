import type { Metadata } from 'next';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import { createPageMetadata } from '@/helpers/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Projects',
    description: "A showcase of projects I've worked on, including web applications, open source contributions, and personal experiments with modern technologies.",
    path: '/projects',
});

export default function Projects() {
    return (
        <PagePlaceholder
            title='Projects'
            description="A collection of projects I've worked on over the years. From professional applications to personal experiments, these projects showcase my journey as a developer and my passion for building useful software."
        />
    );
}
