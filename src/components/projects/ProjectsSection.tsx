import React from "react";
import SectionTitle from "../navbar/SectionTitle";
import ProjectsGrid from "./ProjectsGrid";
import { projects } from "@/utils/links";

const ProjectsSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Projects" />
      <ProjectsGrid list={projects} />
    </section>
  );
};

export default ProjectsSection;
