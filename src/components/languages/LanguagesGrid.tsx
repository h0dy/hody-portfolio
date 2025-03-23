import { TechItem } from "@/utils/links";
import LanguageItem from "./LanguageItem";

const LanguagesGrid = ({ list }: { list: TechItem[] }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center sm:place-items-baseline mt-5">
      {list.map((item) => {
        return <LanguageItem key={item.label} item={item} />;
      })}
    </div>
  );
};

export default LanguagesGrid;
