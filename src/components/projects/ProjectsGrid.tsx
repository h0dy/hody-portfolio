import { Project } from "@/utils/types";
import ProjectItem from "./ProjectItem";
import { Button } from "../ui/button";
import Link from "next/link";

const ProjectsGrid = ({ list }: { list: Project[] }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center sm:place-items-baseline mt-5">
          {list.map((item) => {
            if (item.featured) {
              return <ProjectItem key={item.id} project={item} />;
            }
          })}
        </div>
        <Link href="/projects" passHref>
          <Button className="capitalize place-items-center mt-5 cursor-pointer">
            See All
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ProjectsGrid;
