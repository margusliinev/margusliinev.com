import type { Metadata } from 'next';
import { createPageMetadata } from '@/helpers/seo';
import { PagePlaceholder } from '@/components/PagePlaceholder';

export const metadata: Metadata = createPageMetadata({
    title: 'Uses',
    description: 'Tools, gadgets, software, and gear that I use daily for software development and productivity. My tech stack and favorite development tools.',
    path: '/uses',
});

export default function Uses() {
    return (
        <PagePlaceholder
            title='Uses'
            description="I will put together a comprehensive list of the tools, software, and hardware I use to build software and stay productive. From my development environment to the gadgets on my desk, here's what powers my daily workflow."
        />
    );
}
