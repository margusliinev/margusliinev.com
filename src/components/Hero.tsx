import Image from 'next/image';

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
                <SocialLink href='https://twitter.com/margusliinev' aria-label='Follow on X' icon={XIcon} />
                <SocialLink href='https://instagram.com/margusliinev' aria-label='Follow on Instagram' icon={InstagramIcon} />
                <SocialLink href='https://github.com/margusliinev' aria-label='Follow on GitHub' icon={GitHubIcon} />
                <SocialLink href='https://linkedin.com/in/margusliinev' aria-label='Follow on LinkedIn' icon={LinkedInIcon} />
            </div>
        </div>
    );
}

function SocialLink({ icon: Icon, href, ...props }: { icon: React.ComponentType<{ className?: string }>; href: string; 'aria-label': string }) {
    return (
        <a className='group -m-1 p-1' href={href} aria-label={props['aria-label']} target='_blank' rel='noopener noreferrer'>
            <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
        </a>
    );
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
            <path d='M13.3174 10.7764L19.1457 4H17.9386L12.7192 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.20711L10.7101 13.7878L15.0681 20H20.73L13.3171 10.7764H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.68474 5.03974H8.00382L11.9769 10.728L12.5962 11.6137L17.9392 19.0075H15.6201L11.4257 12.9742V12.9738Z' />
        </svg>
    );
}

function InstagramIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
            <path d='M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z' />
            <path d='M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z' />
        </svg>
    );
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z'
            />
        </svg>
    );
}

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
    );
}
