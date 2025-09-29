import type { Category } from '@/data';
import { CategoryItem } from './CategoryItem';

interface CategorySectionProps {
    category: Category;
}

export function CategorySection({ category }: CategorySectionProps) {
    return (
        <section className='space-y-6'>
            <div className='space-y-2'>
                <h2 className='text-foreground text-xl font-semibold'>{category.title}</h2>
                <p className='text-foreground-muted text-sm'>{category.description}</p>
            </div>
            <div className='grid gap-4 sm:gap-6'>
                {category.items.map((item, index) => (
                    <CategoryItem key={`${category.title}-${index}`} item={item} />
                ))}
            </div>
        </section>
    );
}
