import type { IconComponent } from '@/types';
import { TypeScriptIcon, NodeIcon, ReactIcon, DockerIcon, DatabaseIcon, ToolsIcon, ArrowRightIcon } from '@/components/icons';
import { Card } from '@/components/ui';
import { skills } from '@/data';
import Link from 'next/link';

const iconMap: Record<string, IconComponent> = {
    TypeScriptIcon,
    NodeIcon,
    ReactIcon,
    DockerIcon,
    DatabaseIcon,
};

export function Skills() {
    return (
        <section className='lg:flex-1'>
            <Card>
                <h2 className='text-foreground flex items-center text-sm font-semibold'>
                    <ToolsIcon className='h-6 w-6 flex-none' />
                    <span className='ml-3'>Skills</span>
                </h2>
                <div className='mt-6 flex flex-grow flex-col'>
                    <ul className='flex flex-grow flex-col justify-between gap-3'>
                        {skills.map((skill) => {
                            const Icon = iconMap[skill.iconName];
                            if (!Icon) return null;
                            return (
                                <li key={skill.name} className='flex items-center gap-3'>
                                    <Icon className='h-8 w-8 flex-none' />
                                    <span className='text-foreground text-sm'>{skill.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <Link
                        href='/projects'
                        className='group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-800/50 px-3 py-2 text-sm font-medium text-zinc-300 outline-offset-2 transition hover:bg-zinc-800 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70 active:transition-none'
                    >
                        View Projects
                        <ArrowRightIcon className='h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-600' />
                    </Link>
                </div>
            </Card>
        </section>
    );
}
