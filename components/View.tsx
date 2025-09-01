import { client } from '@/sanity/lib/client';
import Ping from './Ping';
import { STARTUP_VIEWS_QUERY_BY_ID } from '@/sanity/lib/queries';

const View = async ({ id }: { id: string }) => {
  const { views: totalViews }: { views: number } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY_BY_ID, { id });

  return (
    <div className='view-container motion-scale-in-[0] motion-translate-x-in-[1%] motion-translate-y-in-[70%] motion-opacity-in-[50%]'>
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
