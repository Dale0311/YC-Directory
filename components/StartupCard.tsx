import React from 'react';

import { cn, formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Author, Startup } from '@/sanity/types';

export type StartupCardType = Omit<Startup, 'author'> & { author?: Author };

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>{formatDate(_createdAt)}</p>
        <div className='flex gap-1.5'>
          <EyeIcon className='size-6 text-custom-primary' />
          <span className='text-16-medium'>{views}</span>
        </div>
      </div>

      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
          <Link href={`/users/${author?._id}`}>
            <p className='text-16-medium line-clamp-1'>{author?.name}</p>
          </Link>
          <Link href={`/startups/${_id}`}>
            <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
          </Link>
        </div>
        <Link href={`/users/${author?._id}`}>
          <Avatar className='size-12'>
            <AvatarImage
              src={author?.image || 'https://placehold.co/100x100?text=sample'}
              alt={author?.name!}
            />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
          <Avatar className='rounded-full' />
        </Link>
      </div>

      <Link href={`/startups/${_id}`}>
        <p className='startup-card_desc'>{description}</p>

        <img src={image} alt='placeholder' className='startup-card_img' />
      </Link>

      <div className='flex-between gap-3 mt-5'>
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className='text-16-medium'>{category}</p>
        </Link>
        <Button className='startup-card_btn' asChild>
          <Link href={`/startups/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <ul className='mt-7 card_grid'>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn('skeleton', index)}>
        <Skeleton className='startup-card_skeleton' />
      </li>
    ))}
  </ul>
);

export default StartupCard;
