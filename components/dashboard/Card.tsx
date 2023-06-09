import { ReactNode } from 'react';
import Link from 'next/link';

export default function Card({
  title,
  link,
  count,
  icon,
}: {
  title: string;
  link: string;
  count: number;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={link}
      className='group flex items-center justify-between gap-2 rounded-md border p-4 shadow dark:border-neutral-800'
    >
      <div>
        <p className='mb-1 text-xl font-extrabold text-neutral-800 dark:text-neutral-100'>{count}</p>
        <p className='text-base font-semibold text-neutral-600 transition-all group-hover:text-emerald-500 dark:text-neutral-300'>
          {title}
        </p>
      </div>
      <div className='h-12 w-12 text-neutral-300 transition-all duration-500 group-hover:text-emerald-500 dark:text-neutral-700 dark:group-hover:text-emerald-600'>
        {icon}
      </div>
    </Link>
  );
}