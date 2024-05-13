import React, {useEffect} from "react";
import ProjectListItems from "./ProjectListItems";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";

const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch();
  
  useEffect(() => {
    fetchProjects(dispatchProjects);
  }, [dispatchProjects]);

  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ProjectListItems />
    </div>
  );
};

export default ProjectList;