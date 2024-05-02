import { data } from "../../../../data.ts";
import ProjectItem from "@/pages/Home/components/ProjectItem.tsx";

const Projects = () => {
  return (
    <div className={"mt-[60px]"} id={"projects"}>
      <h1 className={"text-2xl font-bold text-center mb-[40px]"}>
        MY PROJECTS
      </h1>
      <div className={"flex flex-wrap"}>
        {data.projects.map((project, index) => (
          <ProjectItem
            project={project}
            isLast={index + 1 === data.projects.length}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
