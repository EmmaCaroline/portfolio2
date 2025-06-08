import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <div className="group">
        <div className="h-full w-full rounded-lg border border-primary py-2 px-4 bg-black transition duration-300 ease-linear group-hover:scale-105">
          <h2 className="text-white pb-4 font-heading text-base md:text-lg">
            {project.title}
          </h2>
          <div className="block w-full h-56 overflow-hidden relative pb-2">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-300 font-body text-sm">
            {project.descriptionShort}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
