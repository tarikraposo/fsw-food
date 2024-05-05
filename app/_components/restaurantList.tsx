import { db } from "../_lib/prisma";

const RestaurantList = async () => {
  const restaurant = await db.restaurant.findMany({
    take: 10,
  });
  return restaurant;
};

export default RestaurantList;
