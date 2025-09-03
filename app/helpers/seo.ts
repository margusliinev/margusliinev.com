const SITE_NAME = 'Margus Liinev';
const SITE_URL = 'https://margusliinev.com';

export interface PageSEO {
    title: string;
    path: string;
    description: string;
}

export function seoTitle(pageTitle: string) {
    return `${pageTitle} - ${SITE_NAME}`;
}

export function seoUrl(path: string) {
    return `${SITE_URL}${path}`;
}

export function seoMeta({ title, path, description }: PageSEO) {
    const TITLE = seoTitle(title);
    const URL = seoUrl(path);
    const DESCRIPTION = description;
    return [
        { title: TITLE },
        { name: 'description', content: DESCRIPTION },
        { name: 'twitter:title', content: TITLE },
        { name: 'twitter:description', content: DESCRIPTION },
        { property: 'og:title', content: TITLE },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:url', content: URL },
    ];
}
