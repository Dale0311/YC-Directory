import { notFound } from 'next/navigation';
import React from 'react';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  notFound();
  return <div>Page</div>;
};

export default Page;
