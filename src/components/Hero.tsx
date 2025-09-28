import Image from 'next/image';
import { socialLinks } from '@/data';
import { XIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '@/components/icons';
import type { IconComponent } from '@/types';

const iconMap: Record<string, IconComponent> = {
    XIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
};

export function Hero() {
    return (
        <div className='mb-16 max-w-3xl pt-10 pb-4'>
            <Image src='/images/profile.jpg' alt='Margus Liinev' className='h-16 w-16 rounded-full object-cover ring-2 ring-zinc-500/50' width={64} height={64} sizes='64px' priority />
            <h1 className='text-foreground xs:leading-12 py-6 text-4xl font-bold tracking-tight sm:text-5xl sm:leading-14'>Software developer, vibe coder and tech enthusiast.</h1>
            <p className='text-foreground-muted max-w-2xl text-base'>
                I&apos;m Margus and I like to build things. This is what I do most of the time. Sometimes I also fix things that are broken. I love building software and been working as a developer
                for the past few years. I am currently working full-time at{' '}
                <a className='text-primary-light font-medium' href='https://www.opus.ee/' target='_blank' rel='noopener noreferrer'>
                    Opus
                </a>
                .
            </p>
            <div className='xs:gap-6 mt-6 flex gap-4'>
                {socialLinks.map((link) => {
                    const Icon = iconMap[link.iconName];
                    if (!Icon) return null;
                    return <SocialLink key={link.href} href={link.href} aria-label={link.label} icon={Icon} />;
                })}
            </div>
        </div>
    );
}

function SocialLink({ icon: Icon, href, ...props }: { icon: IconComponent; href: string; 'aria-label': string }) {
    return (
        <a className='group -m-1 p-1' href={href} aria-label={props['aria-label']} target='_blank' rel='noopener noreferrer'>
            <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
        </a>
    );
}
