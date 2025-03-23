import React from "react";
import SectionTitle from "../navbar/SectionTitle";
import FrontEndGrid from "./FrontEndGrid";
import { FrontEndTechnologies } from "@/utils/links";

const FrontEndSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Front-end Technologies" />
      <FrontEndGrid list={FrontEndTechnologies} />
    </section>
  );
};

export default FrontEndSection;
