interface PageSEO {
    title: string;
    description: string;
}

export function seoMeta({ title, description }: PageSEO) {
    const TITLE = `${title} - Margus Liinev`;
    const DESCRIPTION = description;
    return [
        { title: TITLE },
        { name: 'description', content: DESCRIPTION },
        { name: 'twitter:title', content: TITLE },
        { name: 'twitter:description', content: DESCRIPTION },
        { property: 'og:title', content: TITLE },
        { property: 'og:description', content: DESCRIPTION },
    ];
}
