import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { logIn, logOut } from '@/lib/actions';

const Navbar = async () => {
  const session = await auth();

  return (
    <header>
      <nav className='flex-between p-4'>
        <div>
          <Link href='/'>
            <Image src='/logo.png' alt='logo' width={144} height={30} />
          </Link>
        </div>

        {/* session base ui */}
        <div>
          {session ? (
            <div className='flex justify-between items-center gap-4'>
              <Link href='/startups/create'>
                <span>Create</span>
              </Link>

              <form action={logOut}>
                <button className='cursor-pointer' type='submit'>
                  <span>Logout</span>
                </button>
              </form>
              <Link href={`/users/${session?.user?.id}`}>
                <Avatar className='size-10'>
                  <AvatarImage src={session?.user?.image || ''} />
                  <AvatarFallback>User Avatar</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          ) : (
            <form action={logIn}>
              <button className='cursor-pointer' type='submit'>
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
