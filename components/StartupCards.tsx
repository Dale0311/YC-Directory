import React from 'react';
import StartupCard, { StartupCardType } from '@/components/StartupCard';

import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';

const StartupCards = async () => {
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY }); //posts are updated whenever the data changes in our database

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
