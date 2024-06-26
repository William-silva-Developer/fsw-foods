import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { HTMLAttributes } from "react";

const Search = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Buscar restaurantes" className="border-none" />
      <Button size={"icon"}>
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export { Search };
