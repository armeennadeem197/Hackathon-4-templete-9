import ImageGallery from "@/components/layout/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import AddToBag from "@/components/layout/AddToBag";
import { Star } from "lucide-react";
import CartComponent from "@/components//layout/CartComponent"; // Import the CartComponent

async function getData(slug: string) {
  const query = `*[_type == "shop" && slug.current < "${slug}"] [0]{
    _id,
    name,
    images,
    description,
    "slug": slug.current,
    price,
    stockStatus,
    createdAt
  }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
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
                <Link href="/shop">Shop</Link>
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
          </div>
          <CartComponent /> {/* Use the CartComponent here */}
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
                    <Link href="/Newest">Newest</Link>
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

      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">Home</Link> › Shop Details
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl md:px-8 mt-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
            </div>
            <p className="mt-4 text-base text-gray-500 tracking-wide">{data.description}</p>
            <div className="mb-4 mt-2">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">${data.price}00</span>
                <span className="mb-0.5 text-red-500 line-through">${data.price + 30}</span>
              </div>
              <div className="mb-6 flex items-center gap-3 md:mb-10 mt-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${index < (data.rating || 45) ? "text-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 transition duration-100">
                  {data.totalRatings || "5.0"} Ratings || 22 Reviews
                </span>
                <span className="text-sm text-gray-500">Dictum/cursus/Dictum</span>
              </div>
              <div>
                <AddToBag
                  currency="USD"
                  description={data.description}
                  image={data.images[0]}
                  name={data.name}
                  price={data.price}
                  key={data._id}
                  price_id={data.price_id}
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
