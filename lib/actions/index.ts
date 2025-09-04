'use server';

import { auth, signIn, signOut } from '@/auth';
import { writeClient } from '@/sanity/lib/write-client';
import { parseServerActionResponse } from '../utils';
import slugify from 'slugify';

export const logIn = async () => {
  await signIn('github');
};
export const logOut = async () => {
  await signOut({ redirectTo: '/' });
};

export const incrementViews = async (id: string) => {
  await writeClient.patch(id).inc({ views: 1 }).commit();
};

export const createPitch = async (
  state: any,
  formData: FormData,
  pitch: string
) => {
  const session = await auth();

  // return error if not logged in
  if (!session) {
    return parseServerActionResponse({
      error: 'You must be logged in to create a startup pitch',
      status: 'ERROR',
    });
  }

  // validate form data
  const { title, description, category, link } = Object.fromEntries(
    Array.from(formData).filter(([key]) => key !== 'pitch')
  );
  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const startup = {
      _type: 'startup',
      title,
      description,
      category,
      image: link,
      pitch,
      views: 0,
      slug: { current: slug, _type: 'slug' },
      author: {
        _type: 'reference',
        _ref: session?.user?.id,
      },
    };

    const result = await writeClient.create(startup);
    return parseServerActionResponse({
      ...result,
      status: 'SUCCESS',
      error: '',
    });
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: 'ERROR',
    });
  }
};
