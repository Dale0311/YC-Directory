import React from 'react';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <>
      <section className='pink_container'></section>
      <span className=' '>Hello {id}</span>
    </>
  );
};

export default Page;
