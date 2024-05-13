import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurantItem";
import { db } from "@/app/_lib/prisma";

const RecomendedRestaurants = async () => {
  const restaurants = await db.restaurant.findMany({});
  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">
          Restaurantes Recomendados
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              className="min-w-full max-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecomendedRestaurants;
