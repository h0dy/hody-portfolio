import React from "react";
import SectionTitle from "../navbar/SectionTitle";
import { socials } from "@/utils/links";
import GridContainer from "../global/GridContainer";

const FrontEndSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Socials" />
      <GridContainer list={socials} />
    </section>
  );
};

export default FrontEndSection;
