import { Link } from "react-router-dom";
import { projects } from "../data";
import { Typography } from "@material-tailwind/react";

const OurWork = () => {
  function getFirstWords(text, wordLimit) {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';  
  }
    
    return ( 
          <>
              <div className="container">
                <div className="md:mb-16 mb-8 flex flex-col items-center">
                <h1 className="section-title">Our Work</h1>
                  <Typography
                    className="text-center md:text-xl mx-auto w-full text-gray-700 max-w-4xl"
                  >
                    Since inception, we have been steadfast in churning out revolutionary software products to counter the challenges faced by businesses in their operations
                  </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects.map((project, index) => (
                  <div  
                    key={index}
                    className="project flex relative text-white hover:scale-105 transition duration-500 ease-in-out"
                  >
                    <img
                      src={project.cover_image}
                      alt={project.title}
                      className="w-full md:h-56 h-44 object-cover"
                    />
                    <div className="project-details absolute p-4 flex flex-col w-full h-56 md:bg-gray-900/75 bg-transparent transition duration-500 ease-in-out opacity-0 hover:opacity-100">
                      <h1 className="font-bold md:text-xl mb-3 ">{project.title}</h1>
                      <p className="text-gray-200 text-sm ">
                        {getFirstWords(project.description, 18)}...
                      </p>
                      <div className="justify-between items-center mt-4 flex">
                        <a
                          href={project.link}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm btns text-white"
                        >
                          View Project
                        </a>
                      </div>
                    </div>

                    <a 
                        href={project.link}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cursor-pointer p-4 absolute  md:hidden flex flex-col justify-center h-44 w-full bg-gray-900/75"
                      >
                      <h1 className="font-bold text-xl mb-3">{project.title}</h1>
                      <div className="justify-between items-center mt-4 flex">
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
        </>
     );
}
 
export default OurWork;

