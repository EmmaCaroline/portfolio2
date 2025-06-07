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
      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-green-600 text-white font-semibold py-1 px-4 rounded transition"
        >
          Live Site
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-1 px-4 rounded transition"
        >
          GitHub Repo
        </a>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed mt-10 bg-black">
        {project.descriptionLong}
      </p>
    </div>
  );
};

export default Project;
