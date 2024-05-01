import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image alt="Logo Foods" src={"/logo.png"} width={100} height={30} />
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
