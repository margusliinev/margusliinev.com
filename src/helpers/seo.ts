interface PageMeta {
    title: string;
    description: string;
}

export function seoMeta({ title, description }: PageMeta) {
    return [
        { title },
        { name: 'description', content: description },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
    ];
}
