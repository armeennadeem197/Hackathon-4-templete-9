"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState, useEffect } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState<any>(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setBigImage(images[0]);
    }
  }, [images]); // Set the first image as bigImage when the images prop changes

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  // Add fallback image URL if no image is available
  const getImageUrl = (image: any) => {
    return image ? urlFor(image).url() : '/default-image.png'; // fallback image
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>; // Handle the case where there are no images
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={getImageUrl(image)}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={getImageUrl(bigImage)}  // Use the getImageUrl function here
          alt="Photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
