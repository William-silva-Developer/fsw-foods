import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Link href={"/"} className="relative h-[30px] w-[100px]">
        <Image
          alt="Logo Foods"
          src={"/logo.png"}
          fill
          className="object-cover"
        />
      </Link>
      <Button
        size={"icon"}
        variant={"outline"}
        className="bg-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export { Header };
