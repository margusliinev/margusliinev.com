import Image from 'next/image';
import Link from 'next/link';
import Logo from './logo.svg';

export default async function Home() {
    return <h1>Home</h1>;
}

// export default async function Home() {
//     return (
//         <main className='flex min-h-screen flex-col'>
//             <header className='flex items-center justify-between px-6 py-4'>
//                 <div className='xs:py-0 flex items-center gap-3 py-2'>
//                     <Image src={Logo} alt='Logo' width={40} height={40} className='xs:block hidden h-10 w-10' />
//                     <h1 className='text-foreground xs:text-xl text-lg font-semibold tracking-tight'>margusliinev.com</h1>
//                 </div>
//                 <span className='bg-background-light text-foreground-muted inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm'>
//                     <span className='relative flex h-2 w-2'>
//                         <span className='bg-warning-light absolute inline-flex h-full w-full animate-ping rounded-full opacity-75' />
//                         <span className='bg-warning relative inline-flex h-2 w-2 rounded-full' />
//                     </span>
//                     In Progress
//                 </span>
//             </header>

//             <section className='grid flex-1 place-items-center px-6 pt-10 pb-24'>
//                 <div className='max-w-xl space-y-8 text-center'>
//                     <div className='space-y-4'>
//                         <p className='bg-primary-dark/20 text-primary-light inline-block rounded-md px-3 py-1 text-xs font-medium tracking-wider uppercase'>Coming Soon</p>
//                         <h2 className='text-foreground xs:text-5xl text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
//                             Website Under <span className='text-primary-light'>Construction</span>
//                         </h2>
//                         <p className='text-foreground-muted text-lg leading-relaxed'>
//                             This site is currently being rebuilt and a refreshed version will be live soon. Thanks for stopping by, please check back again in a few weeks for updates.
//                         </p>
//                     </div>

//                     <div className='flex flex-row items-center justify-center gap-4'>
//                         <a
//                             href='mailto:margus.liinev@gmail.com'
//                             className='bg-primary-dark text-foreground hover:bg-primary focus-visible:ring-primary-light relative inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2'
//                         >
//                             <span className='relative'>Get in Touch</span>
//                         </a>
//                         <Link
//                             href='/'
//                             className='bg-background-light text-foreground-muted hover:text-foreground focus-visible:ring-primary-light inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2'
//                             aria-label='Reload page'
//                         >
//                             <svg
//                                 xmlns='http://www.w3.org/2000/svg'
//                                 viewBox='0 0 24 24'
//                                 fill='none'
//                                 stroke='currentColor'
//                                 strokeWidth='2'
//                                 strokeLinecap='round'
//                                 strokeLinejoin='round'
//                                 className='h-4 w-4 opacity-70'
//                                 aria-hidden='true'
//                             >
//                                 <polyline points='23 4 23 10 17 10' />
//                                 <polyline points='1 20 1 14 7 14' />
//                                 <path d='M3.51 9a9 9 0 0114.13-3.36L23 10M1 14l5.36 4.36A9 9 0 0020.49 15' />
//                             </svg>
//                             Refresh
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             <footer className='text-foreground-muted mt-auto px-6 pb-6 text-center text-xs'>
//                 <p>&copy; {new Date().getFullYear()} Margus Liinev. All rights reserved.</p>
//             </footer>
//         </main>
//     );
// }
