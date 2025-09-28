import type { Metadata } from 'next';
import { createPageMetadata } from '@/helpers/seo';
import { PagePlaceholder } from '@/components/PagePlaceholder';

export const metadata: Metadata = createPageMetadata({
    title: 'Contact',
    description: 'Get in touch with Me. Available for collaboration, consulting, or just to chat about software development and technology.',
    path: '/contact',
});

export default function Contact() {
    return (
        <PagePlaceholder
            title='Contact'
            description="I'm always interested in hearing about interesting projects and having a conversation about technology. Whether you're looking for collaboration or want to discuss software development, I'd love to hear from you."
        />
    );
}
