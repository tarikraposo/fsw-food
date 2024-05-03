import { Product } from "@prisma/client";
import Image from "next/image";
import { calcProductTotalPrice } from "../_helpers/price";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      {/* Image */}
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        <div className="absolute left-2 top-2 flex size-3 h-[18px] w-auto items-center rounded-md bg-red-500 px-[4.45px] py-[2px] text-white">
          <span>{product.discountPercentage}%</span>
        </div>
      </div>
      {/* Title */}
      <div className="w-[125px]">
        <h2 className="text-[14px]">{product.name}</h2>
        {/* Price */}
        <div className="flex items-center justify-between gap-1">
          <h3 className="font-semibold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(calcProductTotalPrice(product))}
          </h3>
          {/* Price with discount */}

          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              }).format(Number(product.price))}
            </span>
          )}
        </div>
        {/* Restaurant */}
        <div></div>
      </div>
    </div>
  );
};

export default ProductItem;
