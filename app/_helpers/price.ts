import { Product } from "@prisma/client";

export const calcProductTotalPrice = (product: Product): number => {
  if (product.discountPercentage === 0) {
    return Number(product.price);
  }

  const discount =
    Number(product.price) * ((100 - product.discountPercentage) / 100);

  return discount;
};
