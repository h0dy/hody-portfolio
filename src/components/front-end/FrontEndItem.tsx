import { TechItem } from "@/utils/types";
import { Button } from "../ui/button";
import { Link } from "lucide-react";

const FrontEndItem = ({ item }: { item: TechItem }) => {
  return (
    <div className="item">
      <div className="text-2xl">{item.icon}</div>
      <div className="w-40">
        <p className="capitalize text-xl ">{item.label}</p>
      </div>
      <Button variant="link" size="icon" asChild>
        <a target="_blank" href={item.url}>
          <Link className="size-5" />
        </a>
      </Button>
    </div>
  );
};

export default FrontEndItem;
