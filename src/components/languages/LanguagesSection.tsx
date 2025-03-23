import SectionTitle from "../navbar/SectionTitle";
import LanguagesGrid from "./LanguagesGrid";
import { languages } from "@/utils/links";

const LanguagesSection = () => {
  return (
    <section id="languages">
      <SectionTitle text="languages" />

      <LanguagesGrid list={languages} />
    </section>
  );
};

export default LanguagesSection;
