import SearchForm from '@/components/SearchForm';
import StartupCard, { StartupCardType } from '@/components/StartupCard';
import { startupCardData } from '@/lib/temp';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import React from 'react';

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUPS_QUERY);
  // placeholder data
  // const posts = startupCardData;
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

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Page;
