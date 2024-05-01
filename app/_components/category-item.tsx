import Image from "next/image";
import { Category } from "@prisma/client";
import Link from "next/link";

interface IcategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: IcategoryItemProps) => {
  return (
    <Link href={`/categories/${category.id}/products`}>
      <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-md">
        <Image
          alt={category?.name}
          src={category?.imageUrl}
          width={30}
          height={30}
        />
        <span className="font-semibold text-sm">{category?.name}</span>
      </div>
    </Link>
  );
};

export { CategoryItem };
