'use server';

import { signIn, signOut } from '@/auth';
import { writeClient } from '@/sanity/lib/write-client';

export const logIn = async () => {
  await signIn('github');
};
export const logOut = async () => {
  await signOut({ redirectTo: '/' });
};

export const incrementViews = async (id: string) => {
  await writeClient.patch(id).inc({ views: 1 }).commit();
};
