import type { Metadata } from 'next';

export const TITLE = 'Margus Liinev';
export const DESCRIPTION = 'Hey, my name is Margus Liinev. I am a Full-Stack Software Engineer specializing in TypeScript, Node.js, React. I love building software and solving complex problems.';
export const KEYWORDS = ['Margus Liinev', 'Software Engineer', 'Full Stack Developer', 'TypeScript', 'Node.js', 'React'];
export const BASE_URL = 'https://margusliinev.com';
export const AUTHOR = 'Margus Liinev';
export const SOCIAL = '@margusliinev';

interface PageMetadataOptions {
    title: string;
    description: string;
}

export function createPageMetadata({ title, description }: PageMetadataOptions): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            siteName: TITLE,
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            title,
            description,
            creator: SOCIAL,
            site: SOCIAL,
            card: 'summary',
        },
    };
}
