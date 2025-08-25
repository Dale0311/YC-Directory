import React from 'react';
import StartupCard, { StartupCardType } from '@/components/StartupCard';

import { sanityFetch } from '@/sanity/lib/live';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';

const StartupCards = async ({ query }: { query: string | undefined }) => {
  const params = {
    search: query || null,
  };

  const { data: posts } = await sanityFetch({
    query: STARTUPS_QUERY,
    params,
  }); //posts are updated whenever the data changes in our database

  return (
    <ul className='mt-7 card_grid'>
      {posts?.length > 0 ? (
        posts.map((post: StartupCardType) => (
          <StartupCard key={post?._id} post={post} />
        ))
      ) : (
        <p className='no-results'>No startups found</p>
      )}
    </ul>
  );
};

export default StartupCards;
