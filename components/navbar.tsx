import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { logIn, logOut } from "@/app/actions";
import { Button } from "./ui/button";

const Navbar = async () => {
  const session = await auth();
  return (
    <header>
      <nav className="flex justify-between py-2 px-4">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
          </Link>
        </div>

        {/* session base ui */}
        <div>
          {session ? (
            <div className="flex justify-between items-center gap-4">
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form action={logOut}>
                <Button className="cursor-pointer" type="submit">
                  <span>Log Out</span>
                </Button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <Avatar>
                  <AvatarImage src={session?.user?.image || ""} />
                  <AvatarFallback>User Avatar</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          ) : (
            <form action={logIn}>
              <Button className="cursor-pointer" type="submit">
                <span>Log in</span>
              </Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
