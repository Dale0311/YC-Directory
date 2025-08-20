import React from 'react';
import StartupCard, { StartupCardType } from '@/components/StartupCard';

import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';

const StartupCards = async () => {
  const posts = await client.fetch(STARTUPS_QUERY);

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
