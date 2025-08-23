'use server';

import { signIn, signOut } from '@/auth';
import { sanityFetch } from '@/sanity/lib/live';

export const logIn = async () => {
  await signIn('github');
};
export const logOut = async () => {
  await signOut({ redirectTo: '/' });
};

export const getStartups = async (q: string = '') => {
  const param = q
    ? `&& title match "*${q}*" || category match "*${q}*" || author->name match "*${q}*"`
    : '';

  const STARTUPS_QUERY = `*[_type == "startup" ${param} && defined(slug.current) ] | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author -> {_id, name, username, bio, image},
    views,
    description,
    category,
    image
}`;

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });
  return posts;
};
