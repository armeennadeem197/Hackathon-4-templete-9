import Image from 'next/image';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import foodlogo from "../../../public/Foodtuck.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';
import CartComponent from "@/components//layout/CartComponent"; // Import the CartComponent


const Nav = () => {
  return (
    <div className="w-full flex flex-col lg:px-[100px] px-[20px] lg:py-[20px] py-[10px]">
      <div className="flex justify-center lg:justify-start mb-[10px]">
        <Image src={foodlogo} alt="logo" className="justify-center mx-[440px] font-bold text-[24px] leading-[32px] lg:block hidden" />
      </div>
      <div className="hidden lg:flex justify-between items-center">
        <ul className='text-white flex gap-[10px] font-medium leading-[24px] text-[15px] '>
          <Link href={"/"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-yellow-600'>Home</li></Link>
          <Link href={"/ourmenu"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-yellow-600'>Menu</li></Link>
          <Link href={"/blog"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-yellow-600'>Blog</li></Link>
          <Link href={"/ourchef"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-yellow-600'>Chef</li></Link>
          <Link href={"/aboutus"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-yellow-600'>About</li> </Link>
          <Link href={"/Newest"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text--yellow-600'>Shop</li></Link>
          <Link href={"/signin"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-yellow-600'>Signin</li></Link>
        </ul>
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-yellow-600 rounded-2xl">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white text-[14px] placeholder:text-white w-full"
            />
            <IoSearch className="text-white w-[20px] h-[20px]" />
          </div>
            <CartComponent /> {/* Use the CartComponent here */}
            </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between px-[30px]">
        <Image src={foodlogo} alt="logo" className="w-[150px] h-auto" />
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu className="text-yellow-600 text-[34px] cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-white">
              <Link href={"/"}><li className='font-medium '>Home</li></Link>
              <Link href={"/ourmenu"}><li className='font-medium'>Menu</li></Link>
              <Link href={"/blog"}><li className='font-medium '>Blog</li></Link>
              <Link href={"/ourchef"}><li className='font-medium '>Chef</li></Link>
              <Link href={"/aboutus"}><li className='font-medium '>About</li></Link>
              <Link href={"/shop"}><li className='font-medium '>Shop</li></Link>
              <Link href={"/signin"}><li className='font-medium '>Signin</li></Link>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Nav;
