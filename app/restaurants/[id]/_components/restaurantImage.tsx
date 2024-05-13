"use client";

import { Button } from "@/app/_components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantImageProps {
  restaurant: Pick<Restaurant, "name" | "imageUrl">;
}

const RestaurantImage = ({ restaurant }: RestaurantImageProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();

  return (
    <div className="relative h-[240px] w-full">
      <Image
        src={restaurant.imageUrl}
        alt={restaurant.name}
        fill
        className="z-[-1] object-cover"
      />
      <Button
        className="absolute left-4 top-4 rounded-full bg-white text-foreground hover:text-white "
        size="icon"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>

      <Button
        size="icon"
        className="absolute right-4 top-4 rounded-full bg-muted-foreground"
      >
        <HeartIcon size={20} fill="white" />
      </Button>
    </div>
  );
};

export default RestaurantImage;
