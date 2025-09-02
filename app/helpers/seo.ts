const SITE_NAME = 'Margus Liinev';
const SITE_URL = 'https://margusliinev.com';

export interface PageSEO {
    title: string;
    pathname: string;
}

export function seoTitle(pageTitle: string) {
    return `${pageTitle} | ${SITE_NAME}`;
}

export function seoUrl(pathname: string) {
    return `${SITE_URL}${pathname}`;
}

export function seoMeta({ title, pathname }: PageSEO) {
    const TITLE = seoTitle(title);
    const URL = seoUrl(pathname);
    return [{ title: TITLE }, { name: 'twitter:title', content: TITLE }, { property: 'og:title', content: TITLE }, { property: 'og:url', content: URL }];
}

export function seoLinks({ pathname }: Pick<PageSEO, 'pathname'>) {
    return [{ rel: 'canonical', href: seoUrl(pathname) }];
}
