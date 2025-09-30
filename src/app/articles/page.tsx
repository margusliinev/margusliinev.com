import type { Metadata } from 'next';
import { Placeholder } from '@/components/Placeholder';
import { createPageMetadata } from '@/helpers/seo';

export const metadata: Metadata = createPageMetadata({
    title: 'Articles',
    description: 'Here you can explore my articles, where I share ideas, experiences, and things I’ve learned along the way.',
});

export default function Articles() {
    return (
        <Placeholder
            title='Articles'
            description='Articles on software development and my experiences will be published here soon. The focus will be on TypeScript, Node.js, React, Next.js, coding with AI, and related topics.'
        />
    );
}
