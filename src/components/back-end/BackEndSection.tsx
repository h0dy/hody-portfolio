import React from "react";
import SectionTitle from "../navbar/SectionTitle";
import BackEndGrid from "./BackEndGrid";
import { BackEndTechnologies } from "@/utils/links";

const FrontEndSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Back-end Technologies" />
      <BackEndGrid list={BackEndTechnologies} />
    </section>
  );
};

export default FrontEndSection;
