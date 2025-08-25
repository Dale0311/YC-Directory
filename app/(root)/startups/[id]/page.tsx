import { client } from '@/sanity/lib/client';
import { STARTUP_QUERY_BY_ID } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await client.fetch(STARTUP_QUERY_BY_ID, { id });
  if (!post) notFound();
  return <div>{post.title}</div>;
};

export default Page;
