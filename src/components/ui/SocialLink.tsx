import type { IconComponent } from '@/types';

export function SocialLink({ icon: Icon, href, ...props }: { icon: IconComponent; href: string; 'aria-label': string }) {
    return (
        <a className='group -m-1 p-1' href={href} aria-label={props['aria-label']} target='_blank' rel='noopener noreferrer'>
            <Icon className='h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300' />
        </a>
    );
}
