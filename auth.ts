import NextAuth, { Profile } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { client } from './sanity/lib/client';
import { AUTHOR_BY_GITHUB_ID } from './sanity/lib/queries';
import { writeClient } from './sanity/lib/write-client';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user: { email, name, image }, profile }) {
      // check if the github user already have an account
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID, {
          id: profile?.id,
        });
      // if not create one
      if (!existingUser) {
        await writeClient.create({
          _type: 'author',
          id: profile?.id,
          name: name,
          username: profile?.login,
          email: email,
          image: image,
          bio: profile?.bio || '',
        });
      }
      // proceed
      return true;
    },
    async jwt({ token, profile, account }) {
      if (profile && account) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID, {
            id: profile?.id,
          });

        token.id = user?._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        Object.assign(session.user, { id: token.id });
      }
      return session;
    },
  },
});
