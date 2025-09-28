import type { Metadata } from 'next';
import { ErrorLayout } from '@/components/ui';

export const metadata: Metadata = {
    title: '404 - Not Found',
    description: "Sorry, we couldn't find the page you're looking for.",
};

export default function GlobalNotFound() {
    return <ErrorLayout code='404' title='Not Found' description="Sorry, we couldn't find the page you're looking for." />;
}
