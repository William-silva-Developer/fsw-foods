import { Header } from "@/app/_components/header";
import { ProductItem } from "@/app/_components/product-item";

import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";

interface ICategoriesPageProps {
  params: {
    id: string;
  };
}

const CategoriesPage = async ({ params: { id } }: ICategoriesPageProps) => {
  const categories = await db.category.findUnique({
    where: {
      id,
    },
    include: {
      products: {
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!categories) {
    return notFound();
  }
  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">{categories?.name}</h2>
        <div className="grid grid-cols-2 gap-6">
          {categories.products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              className="min-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
