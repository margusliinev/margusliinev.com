import Image from 'next/image';

export function Footer() {
    return (
        <footer className='mt-32 self-end border-t border-zinc-100/10 pt-10 pb-16'>
            <div className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0'>
                <div className='flex items-center justify-center gap-1 sm:justify-start'>
                    <Image src='/images/logo.svg' alt='Margus Liinev logo' width={36} height={36} className='-ml-1.5' />
                    <span className='text-foreground-muted text-base font-medium'>margusliinev.com</span>
                </div>
                <p className='text-foreground-muted text-center text-sm sm:mt-0 sm:text-left'>&copy; {new Date().getFullYear()} Margus Liinev. All rights reserved.</p>
            </div>
        </footer>
    );
}
