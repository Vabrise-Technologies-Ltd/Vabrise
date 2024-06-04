import { Link } from "react-router-dom";
import { projects } from "../data";
import { Typography } from "@material-tailwind/react";

const OurWork = () => {
  function getFirstWords(text, wordLimit) {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';  // Adding ellipsis to indicate truncation
  }
    
    return ( 
          <>
              <div className="container">
                <div className="md:mb-16 mb-8">
                <h1 className="section-title">Our Work</h1>
                  <Typography
                    className="text-center md:text-xl mx-auto w-full text-gray-700 max-w-4xl"
                  >
                    Since inception, we have been steadfast in churning out revolutionary software products to counter the challenges faced by businesses in their operations
                  </Typography>
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
                {projects.map((project, index) => (
                  <Link
                    href={`${project.link}`}
                    key={index}
                    className="project flex relative text-white hover:scale-105"
                  >
                    <img
                      src={project.cover_image}
                      alt={project.title}
                      className="w-full h-56 object-cover object-center"
                    />
                    <div className="project-details absolute p-4 flex flex-col w-full h-56 md:bg-gray-900/75 bg-transparent transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                      <h1 className="font-bold text-xl mb-3 ">{project.title}</h1>
                      <p className="text-gray-200 text-sm ">
                        {getFirstWords(project.description, 24)}...
                      </p>
                      <div className="justify-between items-center mt-4 flex">
                        <Link
                          href={`${project.link}`}
                          className="text-sm btns text-white"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>

                    <div className="p-4 absolute  md:hidden flex flex-col justify-center h-56 bg-black/60">
                      <h1 className="font-bold text-xl mb-3">{project.title}</h1>
                      <Link
                        href={`${project.link}`}
                        className="hover:underline text-sm bg-black text-white px-4 py-2"
                      >
                        View Project
                      </Link>
                    </div>
                  </Link>
                ))}
              </div>
                
                <a  
                    className="btns mt-8"
                    target="_blank"
                    href="https://github.com/orgs/Vabrise-Technologies-Ltd"
                    >
                    More Projects
                </a>
            </div>
        </>
     );
}
 
export default OurWork;

