import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import heroImg from "../../../assets/home/hero.jpg"

const Hero = () => {
   
    return ( 
        <>
            <div className="hero min-h-screen "
                style={{ 
                    backgroundImage: `url(${heroImg})`,
                    backgroundAttachment: 'fixed',
                    objectPosition: 'cover'
              }} 
                >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content md:text-left text-neutral-content md:px-auto px-3">
                    <div className="2xl:max-w-4xl lg:max-w-2xl md:max-w-xl">
                        <h1 className="md:my-8 my-4 lg:text-7xl md:text-5xl text-4xl font-bold">We Build Ideas Driven by the Future</h1>
                        <p className="md:mb-8 mb-4 md:text-lg">Manage your bussiness without having to worry about the kind of technical solutions to use. Less hustle more growth.</p>
                        <p className="text-yellow-500 md:text-4xl text-xl font-light">
                                <Typewriter
                                    words={[
                                        'Web Design', 
                                        'Software Development',
                                        'Software As A Service',
                                        'Cloud Computing',
                                        'Cyber Security',
                                        'IT Equipments & Supplies',
                                        'IT Consulting & Maintenance',
                                        'Technical Mentorship'
                                    ]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </p>
                            <button className="btns mt-8 text-black">
                                <a 
                                    href="https://api.whatsapp.com/send?phone=254799874578"
                                    target="_blank" 
                                        rel="noopener noreferrer" >
                                    Get Quote
                                </a>
                            </button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Hero;