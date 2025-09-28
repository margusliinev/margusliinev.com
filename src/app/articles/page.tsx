import type { Metadata } from 'next';
import { createPageMetadata } from '@/helpers/seo';
import { PagePlaceholder } from '@/components/PagePlaceholder';

export const metadata: Metadata = createPageMetadata({
    title: 'Articles',
    description: 'Technical articles, tutorials, and insights about software development, TypeScript, React, and modern web technologies.',
    path: '/articles',
});

export default function Articles() {
    return (
        <PagePlaceholder
            title='Articles'
            description='Articles on software development and my experiences will be published here soon. The focus will be on TypeScript, Node.js, React, Next.js, coding with AI, and the evolving landscape of modern development.'
        />
    );
}
