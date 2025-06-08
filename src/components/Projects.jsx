import TypewriterHeading from "../ui/TypewriterHeading";
import projectData from "./ProjectData";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="p-8 md:p-16 mt-24 md:mt-28 lg:mt-32">
        <TypewriterHeading />
      </div>
      <div className="px-8 md:px-16 mt-40">
        <h2 className="text-white font-heading text-base md:text-lg mb-8 animate-subtlePulse">
          Take a look at my recent projects:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 lg:gap-8 xl:gap-10">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
