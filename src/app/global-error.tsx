'use client';

import { ErrorLayout } from '@/components/ui';

export default function GlobalError() {
    return <ErrorLayout code='500' title='Internal Server Error' description='Sorry, something went wrong on our end. Please try again later.' />;
}
