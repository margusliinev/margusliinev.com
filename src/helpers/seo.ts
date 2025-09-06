interface PageSEO {
    title: string;
    description: string;
}

export function seoMeta({ title, description }: PageSEO) {
    return [
        { title: title },
        { name: 'description', content: description },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
    ];
}
