import { client } from '@/sanity/lib/client';
import Ping from './Ping';
import { STARTUP_VIEWS_QUERY_BY_ID } from '@/sanity/lib/queries';
import { writeClient } from '@/sanity/lib/write-client';
import { after } from 'next/server';

const View = async ({ id }: { id: string }) => {
  const { views: totalViews }: { views: number } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY_BY_ID, { id });

  // await writeClient
  //   .patch(id)
  //   .set({ views: totalViews + 1 })
  //   .commit();
  // after(async () => {
  //   await writeClient
  //     .patch(id)
  //     .set({ views: totalViews + 1 })
  //     .commit();
  // });

  return (
    <div className='view-container'>
      <div className='absolute -top-2 -right-2'>
        <Ping />
      </div>

      <p className='view-text'>
        <span className='font-black'>
          {totalViews > 1 ? 'Views' : 'View'}: {totalViews}
        </span>
      </p>
    </div>
  );
};
export default View;
