import type { Metadata } from 'next';

export const TITLE = 'Margus Liinev';
export const DESCRIPTION = 'I am a Full-Stack Software Engineer specializing in TypeScript, NodeJS, React.';
export const KEYWORDS = ['Margus Liinev', 'Software Engineer', 'Full Stack Developer', 'TypeScript', 'NodeJS', 'React'];
export const BASE_URL = 'https://margusliinev.com';
export const AUTHOR = 'Margus Liinev';
export const SOCIAL = '@margusliinev';

interface PageMetadataOptions {
    title: string;
    description: string;
    path: string;
}

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
    const pageTitle = `${title} - ${TITLE}`;
    const url = `${BASE_URL}${path}`;

    return {
        title: pageTitle,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: pageTitle,
            description,
            url,
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
