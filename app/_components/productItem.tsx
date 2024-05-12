import { Prisma } from "@prisma/client";
import Image from "next/image";
import { calcProductTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link className="w-[150px]" href={`/products/${product.id}`}>
      <div className="w-full space-y-2">
        {/* Image */}
        <div className="relative h-[150px] w-[150px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
          <div className="absolute left-2 top-2 flex size-3 h-[18px] w-auto items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-xs font-semibold text-white">
            <ArrowDownIcon size={12} />
            <span>{product.discountPercentage}%</span>
          </div>
        </div>
        <div className="w-[125px]">
          <h2 className="truncate text-[14px]">{product.name}</h2>
          <div className="flex items-center justify-between gap-1">
            <h3 className="font-semibold">
              {formatCurrency(calcProductTotalPrice(product))}
            </h3>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(Number(product.price))}
              </span>
            )}
          </div>
          {/* Restaurant */}
          <div>
            <span className="block text-xs text-muted-foreground">
              {product.restaurant.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
