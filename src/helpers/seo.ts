import type { Metadata } from 'next';

export const TITLE = 'Margus Liinev';
export const DESCRIPTION =
    "I'm Margus and I like to build things. I work as a software developer with a focus on TypeScript, Node.js, and React. I’ve been in the field for the past few years, and I’m currently working full-time at Opus.";
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
    const url = `${BASE_URL}/${path}`;

    return {
        title: pageTitle,
        description,
        openGraph: {
            title: pageTitle,
            description,
            siteName: TITLE,
            locale: 'en_US',
            type: 'website',
            url,
        },
        twitter: {
            title: pageTitle,
            description,
            creator: SOCIAL,
            site: SOCIAL,
            card: 'summary',
        },
        alternates: {
            canonical: url,
        },
    };
}
