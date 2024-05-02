import { IProject } from "@/models/data.ts";
import { Button } from "@/components/ui/button.tsx";

interface IProjectItem {
  project: IProject;
  isLast: boolean;
  index: number;
}

const defaultIcon =
  "https://static.vecteezy.com/system/resources/previews/007/571/212/non_2x/frontend-development-line-icon-vector.jpg";

const ProjectItem = ({ project, isLast = false, index }: IProjectItem) => {
  return (
    <div
      className={`flex ${!isLast && "mb-[20px]"} ${index % 2 === 0 ? "ml-auto" : "justify-start"}`}
    >
      {index % 2 !== 0 && (
        <>
          <img
            src={project.icon || defaultIcon}
            alt="Icon"
            className={"md:max-w-[200px] object-contain md:block hidden"}
          />
          <div className={"p-[15px] pb-[30px] flex flex-col justify-between"}>
            <h2 className={"text-xl"}>{project.title}</h2>
            <Button asChild className={"my-[10px] max-w-[120px]"}>
              <a href={project.link} target={"_blank"}>
                Open website
              </a>
            </Button>
            <p className={"max-w-[400px]"}>{project.description}</p>
          </div>
        </>
      )}
      {index % 2 === 0 && (
        <>
          <div className={"p-[15px] pb-[30px] flex flex-col justify-between"}>
            <h2 className={"text-xl text-right"}>{project.title}</h2>
            <Button asChild className={"my-[10px] max-w-[120px] ml-auto"}>
              <a href={project.link} target={"_blank"}>
                Open website
              </a>
            </Button>
            <p className={"max-w-[400px] text-right"}>{project.description}</p>
          </div>
          <img
            src={project.icon || defaultIcon}
            alt="Icon"
            className={"md:max-w-[200px] object-contain h-auto md:block hidden"}
          />
        </>
      )}
    </div>
  );
};

export default ProjectItem;
