import { Link } from "react-router-dom";
import TypewriterHeading from "../ui/TypewriterHeading";

const projectsData = [
  { id: "proj1", title: "Project One" },
  { id: "proj2", title: "Project Two" },
  { id: "proj3", title: "Project Three" },
];

const Projects = () => {
  return (
    <>
      <div className="p-8 md:p-16 mt-10 md:mt-16 lg:mt-32">
        <TypewriterHeading />
      </div>
      <div>
        <h2 className="text-white">Projects</h2>
        <ul>
          {projectsData.map((project) => (
            <li key={project.id}>
              <Link className="text-white" to={`/project/${project.id}`}>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
