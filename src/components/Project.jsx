import { useParams } from "react-router-dom";
import projectData from "../ui/ProjectData";

const Project = () => {
  const { projectId } = useParams();

  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <p className="text-white">Project not found.</p>;
  }

  return (
    <div>
      <h2 className="text-white">{project.title}</h2>
      {/* Add image here */}
      <p className="text-white">{project.description}</p>
      {/* Add buttons here */}
    </div>
  );
};

export default Project;
