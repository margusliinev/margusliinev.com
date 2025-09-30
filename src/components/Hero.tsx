'use client';

import type { IconComponent } from '@/types';
import { XIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '@/components/icons';
import { SocialLink } from '@/components/ui';
import { socialLinks } from '@/data';
import Image from 'next/image';

const iconMap: Record<string, IconComponent> = {
    XIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
};

export function Hero() {
    return (
        <>
            <div className='xs:pt-10 mb-16 max-w-3xl pb-4'>
                <div className='xs:hidden mb-6 flex items-center'>
                    <Image src='/images/profile.jpg' alt='Margus Liinev' className='h-16 w-16 rounded-full object-cover ring-2 ring-zinc-500/50' width={64} height={64} sizes='64px' priority />
                </div>

                <Image
                    src='/images/profile.jpg'
                    alt='Margus Liinev'
                    className='xs:block hidden h-16 w-16 rounded-full object-cover ring-2 ring-zinc-500/50'
                    width={64}
                    height={64}
                    sizes='64px'
                    priority
                />

                <h1 className='text-foreground xs:leading-12 py-6 text-4xl font-bold tracking-tight sm:text-5xl sm:leading-14'>Software developer, vibe coder and tech enthusiast.</h1>
                <p className='text-foreground-muted max-w-2xl text-base'>
                    I&apos;m Margus and I like to build things. This is what I do most of the time. Sometimes I also fix things that are broken. I love building software and been working as a
                    developer for the past few years. I am currently working full-time at{' '}
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
        </>
    );
}
