import SectionTitle from "../navbar/SectionTitle";
import LanguagesGrid from "./LanguagesGrid";
import { languages } from "@/utils/links";

const LanguagesSection = () => {
  return (
    <section id="languages" className="my-10">
      <SectionTitle text="languages/frameworks" />

      <LanguagesGrid list={languages} />
    </section>
  );
};

export default LanguagesSection;
