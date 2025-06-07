import ProfileBanner from "../assets/profile_banner.jpg";
import ProfileImage from "../assets/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-black pb-2 rounded-lg mx-auto shadow-lg max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl mt-10">
      <div className="flex justify-center">
        <img
          src={ProfileBanner}
          alt="Profile Banner"
          className="w-full h-40 sm:h-52 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg pb-6"
        />
      </div>
      <div className="ml-2">
        <div className="flex flex-col sm:flex-row sm:justify-around items-center">
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover self-start"
            src={ProfileImage}
          />
          <p className="text-white font-body text-sm md:text-base sm:w-1/2 mt-6 sm:mt-0">
            about text here about text here about text here about text here
            about text here about text here about text here about text here
            about text here about text here about text here about text here
            about text here about text here about text here about text here
            about text here about text here about text here about text here
            about text here about text here about text here about text here
            about text here about text here
          </p>
        </div>
        <p className="text-white font-body text-sm md:text-base mt-8 sm:ml-[72px] md:ml-[90px] lg:ml-[126px] flex items-center gap-6 sm:gap-3 mb-6">
          Contact:
          <a
            href="https://www.linkedin.com/in/emma-caroline-brander-111384318/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition ml-4 sm:ml-[100px] md:ml-[124px] lg:ml-[178px]"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/EmmaCaroline"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            <FaGithub size={20} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
