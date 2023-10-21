import { authOptions } from "@/auth"
import {ModeToggle} from "./DarkModeToggle"
import Logo from "./Logo"
import UserButton from "./UserButton"
import { getServerSession } from "next-auth/next"
import Link from "next/link"
import { MessagesSquare } from 'lucide-react';
import CreateChat from "./CreateChat"

async function Header () {
  const session: any = await getServerSession(authOptions);
  return (
    <header className="sticky top-0 z-40 w-full dark:bg-[#0e0e11] bg-white">
        <nav className="flex flex-col md:flex-row items-center p-5 bg-white dark:bg-[#0e0e11] max-w-7xl mx-auto">
            <Logo />
            <div className="flex-1 flex items-center justify-end space-x-4">
              {/* <LanguageSelect /> */}
              {session && (
                <>
                  <Link href={'/chat'} prefetch={false}>
                  <MessagesSquare className="text-black dark:text-white"/>
                  </Link>
                  <CreateChat/>
                </>
              )}
              <ModeToggle/>
              <UserButton session={session}/>
            </div>
        </nav>
    </header>
  )
}

export default Header
