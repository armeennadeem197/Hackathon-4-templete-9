import Link from "next/link"
import { IoSearch } from "react-icons/io5"
import { PiUserBold } from "react-icons/pi"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi"
import CartComponent from "@/components/layout/CartComponent"

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-yellow-500">FoodTuck</h1>
        <nav className="lg:block hidden">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/ourmenu">Menu</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/ourchef">Chef</Link>
            </li>
            <li>
              <Link href="/aboutus">About</Link>
            </li>
            <li>
              <Link href="/newest">Newest</Link>
            </li>
            <li>
              <Link href="/signin">Signin</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <IoSearch className="text-white text-[24px] cursor-pointer" />
          <Link href={"/signup"}>
            <PiUserBold className="text-white text-[24px] cursor-pointer" />
          </Link>
          <CartComponent />
        </div>
        <div className="lg:hidden block">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className="text-white text-[24px] cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-black">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/ourmenu">Menu</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/ourchef">Chef</Link>
                </li>
                <li>
                  <Link href="/aboutus">About</Link>
                </li>
                <li>
                  <Link href="/newest">Newest</Link>
                </li>
                <li>
                  <Link href="/signin">Signin</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

