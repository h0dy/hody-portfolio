import React from "react";
import SectionTitle from "../navbar/SectionTitle";
import { BackEndTechnologies } from "@/utils/links";
import GridContainer from "../global/GridContainer";

const FrontEndSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Back-end Technologies" />
      <GridContainer list={BackEndTechnologies} />
    </section>
  );
};

export default FrontEndSection;
