export function formatDate(dateString: string, endDate?: string | null): string {
    const start = new Date(dateString);
    const startFormatted = start.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });

    if (endDate === null) {
        return `${startFormatted} — Present`;
    }

    if (endDate) {
        const end = new Date(endDate);
        const endFormatted = end.toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
        });
        return `${startFormatted} — ${endFormatted}`;
    }

    return startFormatted;
}

export function formatDateRange(startDate: string, endDate: string | null): string {
    return formatDate(startDate, endDate);
}
