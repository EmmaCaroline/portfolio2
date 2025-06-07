import { useParams } from "react-router-dom";
import projectData from "../ui/ProjectData";

const Project = () => {
  const { projectId } = useParams();

  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <p className="text-white">Project not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 min-h-screen">
      <h2 className="text-white text-3xl font-bold mb-6">{project.title}</h2>
      <div className="mb-8">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full max-h-[500px] object-contain rounded-md shadow-lg"
        />
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">
        {project.description}
      </p>
      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          View Live Site
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded transition"
        >
          View GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
