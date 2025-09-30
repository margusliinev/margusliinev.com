import type { Metadata } from 'next';

export const TITLE = 'Margus Liinev';
export const DESCRIPTION = 'Hey, my name is Margus Liinev. I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS, React. I currently work at Opus.';
export const KEYWORDS = ['Margus Liinev', 'Software Engineer', 'Full Stack Developer', 'TypeScript', 'NodeJS', 'React'];
export const BASE_URL = 'https://margusliinev.com';
export const AUTHOR = 'Margus Liinev';
export const SOCIAL = '@margusliinev';

interface PageMetadataOptions {
    title: string;
    description: string;
}

export function createPageMetadata({ title, description }: PageMetadataOptions): Metadata {
    const pageTitle = `${title} - ${TITLE}`;

    return {
        title: pageTitle,
        description,
        openGraph: {
            title: pageTitle,
            description,
            siteName: TITLE,
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            title: pageTitle,
            description,
            creator: SOCIAL,
            site: SOCIAL,
            card: 'summary',
        },
    };
}
