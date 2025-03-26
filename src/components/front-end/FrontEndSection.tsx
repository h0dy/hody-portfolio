import React from "react";
import SectionTitle from "../navbar/SectionTitle";
import { FrontEndTechnologies } from "@/utils/links";
import GridContainer from "../global/GridContainer";

const FrontEndSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Front-end Technologies" />
      <GridContainer list={FrontEndTechnologies} />
    </section>
  );
};

export default FrontEndSection;
