import type { Item } from '@/data';

interface CategoryItemProps {
    item: Item;
}

export function CategoryItem({ item }: CategoryItemProps) {
    return (
        <div className='flex flex-col gap-3 rounded-lg border border-zinc-100/5 bg-zinc-800/20 p-4 transition-colors hover:bg-zinc-800/30'>
            <h3 className='text-foreground text-base font-semibold'>{item.name}</h3>
            <p className='text-foreground-muted text-sm leading-relaxed'>{item.description}</p>
        </div>
    );
}
