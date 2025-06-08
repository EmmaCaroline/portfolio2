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
      <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-heading font-medium mb-6">
        {project.title}
      </h2>
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
          className="bg-primary hover:bg-green-600 text-white font-body text-sm md:text-base py-1 px-4 rounded shadow-lg border border-black transition-all duration-300 hover:scale-110"
        >
          Live Site
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-600 text-white font-body text-sm md:text-base py-1 px-4 rounded shadow-lg border border-black transition-all duration-300 hover:scale-110"
        >
          GitHub Repo
        </a>
      </div>
      <div className="text-gray-300 text-sm lg:text-base font-body leading-relaxed mt-8 px-2 py-2 bg-black">
        {project.descriptionLong.split(/\n\s*\n/).map((para, i) => (
          <p key={i} className="mb-4">
            {para.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
