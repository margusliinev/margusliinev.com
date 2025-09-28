'use client';

import type { IconComponent } from '@/types';
import { XIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '@/components/icons';
import { socialLinks } from '@/data';
import { useState, useEffect } from 'react';
import { navigationItems } from '@/data';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const iconMap: Record<string, IconComponent> = {
    XIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
};

export function Hero() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false);
    };

    const handleMobileNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className='mb-16 max-w-3xl pt-10 pb-4'>
                <div className='xs:hidden mb-6 flex items-center justify-between'>
                    <Image src='/images/profile.jpg' alt='Margus Liinev' className='h-16 w-16 rounded-full object-cover ring-2 ring-zinc-500/50' width={64} height={64} sizes='64px' priority />
                    <button
                        className='bg-background-light ring-foreground/10 pointer-events-auto flex items-center gap-2 rounded-full px-4 py-3 ring-1 backdrop-blur-sm'
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label='Open navigation menu'
                    >
                        <span className='text-foreground-muted text-sm font-medium'>Menu</span>
                        <svg className='text-foreground-muted h-5 w-5' fill='none' strokeWidth='2' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
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

            {isMobileMenuOpen && (
                <div className='xs:hidden fixed inset-0 z-[60]'>
                    <div className='bg-background-dark/95 absolute inset-0 backdrop-blur-sm' onClick={handleMobileMenuClose} />

                    <div className='relative flex min-h-full items-center justify-center p-4'>
                        <div className='bg-background ring-foreground/10 w-full max-w-sm rounded-2xl p-8 ring-1 backdrop-blur-sm'>
                            <div className='mb-8 flex justify-end'>
                                <button onClick={handleMobileMenuClose} className='text-foreground-muted hover:text-foreground p-1' aria-label='Close navigation menu'>
                                    <svg className='h-6 w-6' fill='none' strokeWidth='2' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </button>
                            </div>

                            <nav>
                                <ul className='space-y-4'>
                                    {navigationItems.map((navigation) => {
                                        const isActive = navigation.href === pathname;
                                        return (
                                            <li key={navigation.href}>
                                                <Link
                                                    href={navigation.href}
                                                    onClick={handleMobileNavClick}
                                                    className={`block rounded-lg px-4 py-3 text-center text-lg font-medium transition-colors ${
                                                        isActive ? 'text-primary-very-light bg-primary-very-light/10' : 'text-foreground-muted hover:text-primary-very-light hover:bg-zinc-800/50'
                                                    }`}
                                                >
                                                    {navigation.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function SocialLink({ icon: Icon, href, ...props }: { icon: IconComponent; href: string; 'aria-label': string }) {
    return (
        <a className='group -m-1 p-1' href={href} aria-label={props['aria-label']} target='_blank' rel='noopener noreferrer'>
            <Icon className='h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300' />
        </a>
    );
}
