import { useParams } from "react-router-dom";

const projectsData = [
  { id: "proj1", title: "Project One", description: "This is project one." },
  { id: "proj2", title: "Project Two", description: "This is project two." },
  {
    id: "proj3",
    title: "Project Three",
    description: "This is project three.",
  },
];

const Project = () => {
  const { projectId } = useParams();

  const project = projectsData.find((p) => p.id === projectId);

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
