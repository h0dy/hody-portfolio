import GridContainer from "../global/GridContainer";
import SectionTitle from "../navbar/SectionTitle";
import { languages } from "@/utils/links";

const LanguagesSection = () => {
  return (
    <section id="languages" className="my-10">
      <SectionTitle text="languages" />
      <GridContainer list={languages} />
    </section>
  );
};

export default LanguagesSection;
