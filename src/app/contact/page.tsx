import type { Metadata } from 'next';
import type { IconComponent } from '@/types';
import { MobileMenuButton } from '@/components/MobileMenuButton';
import { SocialLink } from '@/components/ui';
import { XIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '@/components/icons';
import { createPageMetadata } from '@/helpers/seo';
import { socialLinks } from '@/data';

const iconMap: Record<string, IconComponent> = {
    XIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
};

export const metadata: Metadata = createPageMetadata({
    title: 'Contact',
    description: 'Get in touch with me. Available for collaboration or just to chat about software development and technology.',
    path: '/contact',
});

export default function Contact() {
    const linkedInLink = socialLinks.find((link) => link.iconName === 'LinkedInIcon');

    return (
        <div className='pt-12.5 pb-16 sm:pb-20'>
            <MobileMenuButton />
            <div className='max-w-2xl space-y-6'>
                <h1 className='text-foreground text-3xl font-bold tracking-tight sm:text-4xl'>Contact</h1>
                <p className='text-foreground-muted text-base leading-7'>
                    I&apos;m always interested in hearing about interesting projects and having a conversation about technology. Whether you&apos;re looking for collaboration, consulting, or want to
                    discuss software development, I&apos;d love to hear from you.
                </p>
            </div>

            <div className='mt-16 space-y-12 sm:mt-20'>
                <div className='space-y-6'>
                    <h2 className='text-foreground text-xl font-semibold tracking-tight'>Let&apos;s connect</h2>
                    <p className='text-foreground-muted text-base leading-7'>
                        My preferred way of connecting is through{' '}
                        {linkedInLink && (
                            <a
                                href={linkedInLink.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-primary-light hover:text-primary-very-light decoration-primary-light/30 hover:decoration-primary-very-light/50 font-medium underline underline-offset-2 transition-colors'
                            >
                                LinkedIn
                            </a>
                        )}
                        , where we can have a professional conversation about opportunities and collaborations.
                    </p>
                </div>

                <div className='space-y-6'>
                    <h3 className='text-foreground text-lg font-medium'>Social media</h3>
                    <div className='flex flex-wrap gap-6'>
                        {socialLinks.map((link) => {
                            const Icon = iconMap[link.iconName];
                            if (!Icon) return null;
                            return (
                                <div key={link.href} className='flex items-center gap-3'>
                                    <SocialLink href={link.href} aria-label={link.label} icon={Icon} />
                                    <a href={link.href} target='_blank' rel='noopener noreferrer' className='text-foreground-muted hover:text-foreground text-sm font-medium transition-colors'>
                                        {link.label.replace('Follow on ', '')}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='space-y-6'>
                    <h3 className='text-foreground text-lg font-medium'>Email</h3>
                    <p className='text-foreground-muted text-base leading-7'>
                        If you prefer email communication, you can reach me at{' '}
                        <a
                            href='mailto:margus.liinev@gmail.com'
                            className='text-primary-light hover:text-primary-very-light decoration-primary-light/30 hover:decoration-primary-very-light/50 font-medium underline underline-offset-2 transition-colors'
                        >
                            margus.liinev@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
