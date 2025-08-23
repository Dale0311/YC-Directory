import SearchForm from '@/components/searchform/SearchForm';
import { StartupCardSkeleton } from '@/components/StartupCard';
import StartupCards from '@/components/StartupCards';

import React, { Suspense } from 'react';

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const query = (await searchParams).query;

  return (
    <>
      {/* hero section */}
      <section className='pink_container pattern'>
        <h1 className='heading'>
          Pitch your idea, <br /> Connect with entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl '>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        {/* search form */}
        <SearchForm query={query} />
      </section>

      {/* startups section */}
      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        {/* Load Skeleton while fetching data */}
        <Suspense fallback={<StartupCardSkeleton />}>
          <StartupCards query={query} />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
