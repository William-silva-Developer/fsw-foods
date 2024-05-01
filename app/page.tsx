import Image from "next/image";
import { Categorylist } from "./_components/category-list";
import { Header } from "./_components/header";
import { Search } from "./_components/search";

const Home = () => {
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
    </>
  );
};

export default Home;
