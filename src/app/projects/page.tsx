import Loader from "@/components/Loader";
import React from "react";

const ProjectsPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="capitalize font-semibold text-xl">coming soon</h1>
        <Loader />
      </div>
    </section>
  );
};

export default ProjectsPage;
