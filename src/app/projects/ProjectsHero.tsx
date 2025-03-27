import AlertBox from "@/components/global/AlertBox";
import React from "react";

const ProjectsHero = () => {
  return (
    <section className="mt-20">
      <h1 className="lg:text-3xl sm:text-2xl text-xl font-bold capitalize">
        Projects
      </h1>
      <p className="sm:text-xl text-base sm:tracking-wide py-5 text-muted-foreground">
        Here are some of my projects that I&apos;ve worked on
      </p>
      <AlertBox text="Some projects may be unavailable due to inactivity, causing database downtime, while others run on free-tier hosting, leading to slower loading time." />
    </section>
  );
};

export default ProjectsHero;
