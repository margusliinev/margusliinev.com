import type { Route } from './+types/home';
import { seoMeta, seoLinks } from '../helpers/seo';

export const meta: Route.MetaFunction = () => seoMeta({ title: 'Home', pathname: '/' });

export const links: Route.LinksFunction = () => seoLinks({ pathname: '/' });

export default function Home() {
    return <h1>Hello World</h1>;
}
