import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ProductImage from "./_components/productImage";
import ProductDetails from "./_components/productDetails";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const products = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });
  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
      restaurant: {
        id: products?.restaurant.id,
      },
    },
    include: {
      restaurant: true,
    },
  });

  if (!products) {
    return notFound();
  }

  return (
    <div>
      <ProductImage product={products} />
      <ProductDetails product={products} complementaryProducts={juices} />
    </div>
  );
};

export default ProductPage;
