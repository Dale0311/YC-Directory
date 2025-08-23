import React from 'react';
import StartupCard, { StartupCardType } from '@/components/StartupCard';

import { getStartups } from '@/lib/actions';

const StartupCards = async ({ query }: { query: string | undefined }) => {
  // const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY }); //posts are updated whenever the data changes in our database

  const posts = await getStartups(query);
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
