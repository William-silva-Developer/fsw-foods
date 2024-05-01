import Image from "next/image";
import { Categorylist } from "./_components/category-list";
import { Header } from "./_components/header";
import { Search } from "./_components/search";
import { ProductList } from "./_components/product-list";
import { db } from "./_lib/prisma";
import { Button } from "./_components/ui/button";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <Categorylist />
      </div>

      <div className="px-5 py-6">
        <Image
          src={"/banner-01.png"}
          alt="30% de desconto em pizzas!"
          height={0}
          width={0}
          className="h-auto w-full object-cover"
          sizes="100vw"
          quality={100}
        />
      </div>
      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>

          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
            asChild
          >
            <Link href="/products/recommended">
              Ver todos
              <ChevronRightIcon size={16} />
            </Link>
          </Button>
        </div>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Home;
