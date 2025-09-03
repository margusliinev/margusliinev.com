import type { Route } from './+types/home';
import { seoMeta } from '../helpers/seo';

export const meta: Route.MetaFunction = seoMeta({
    title: 'Home',
    path: '/',
    description: 'Full-Stack Software Engineer focused on TypeScript, NodeJS & React. Explore my work and thoughts.',
});

export default function Home() {
    return <h1>Hello World</h1>;
}
