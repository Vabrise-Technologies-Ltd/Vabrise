import kccson from "../assets/KCCSON.png"
import chris from "../assets/chris-portfolio.png"
import ola from "../assets/OLA.png"
import ccabo from "../assets/ccabo.png"

const OurWork = () => {
    const projects = [
        {id: 1, title: "Kakamega CSO Network", image: kccson, link: "https://www.kakamegacsonetwork.org"},
        {id: 2, title: "Open Learn Africa", image: ola, link: "https://learn.vabrisetech.co.ke/"},
        {id: 3, title: "CCABO KENYA", image: ccabo, link: "https://ccabokenya.or.ke/"},
        {id: 4, title: "Chris Khayere", image: chris, link: "https://chris.vabrisetech.co.ke/"},
    ]
    return ( 
        <>
            <h1 className="section-title">Our Work</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 items-center gap-8 md:mt-8 mt-4 md:mb-32 mb-16">
                {projects.map((project) => (
                    <div key={project.id} className='shadow-xl hover:shadow-2xl py-3 px-2 rounded-lg flex flex-col items-center'>
                        <img 
                            src={project.image} 
                            alt="project-image"
                            className="w-full h-full rounded-lg mb-4"
                        />
                        <a target="_blank" className="text-sm px-4 py-1 bg-gradient-to-r from-cyan-500 to-cyan-700 border-none text-white duration-500 rounded-md" href={project.link}>
                            {project.title}
                        </a>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default OurWork;