import React from "react";
import SectionTitle from "../navbar/SectionTitle";
import SocialGrid from "./SocialsGrid";
import { socials } from "@/utils/links";

const FrontEndSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Socials" />
      <SocialGrid list={socials} />
    </section>
  );
};

export default FrontEndSection;
