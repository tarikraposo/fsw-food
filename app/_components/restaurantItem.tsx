import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import Link from "next/link";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className="min-w-[266px] max-w-[266px]"
    >
      <div className="w-full space-y-3">
        <div className="relative h-[136px] w-full">
          <Image
            src={restaurant.imageUrl}
            alt={restaurant.name}
            fill
            className="rounded-lg object-cover"
          />
          <div className="absolute left-2 top-2 flex size-3 h-[18px] w-auto items-center gap-[2px] rounded-full bg-white px-2 py-[2px] text-xs font-semibold">
            <StarIcon className="fill-yellow-400 text-yellow-400" size={12} />
            <span className="font-semibold">5.00</span>
          </div>
          <Button
            size="icon"
            className="absolute right-2 top-2 h-7 w-7 rounded-full bg-muted-foreground"
          >
            <HeartIcon size={16} fill="white" />
          </Button>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{restaurant.name}</h3>
          <div className="flex gap-3">
            <div className="flex gap-1 ">
              <BikeIcon className="text-primary" size={14} />
              <span className="text-xs text-muted-foreground">
                {Number(restaurant.deliveryFee) === 0
                  ? "Entrega grátis!"
                  : formatCurrency(Number(restaurant.deliveryFee))}
              </span>
            </div>
            <div className="flex gap-1">
              <TimerIcon className="text-primary" size={14} />
              <span className="text-xs text-muted-foreground">
                {restaurant.deliveryTimeMinutes}min
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;
