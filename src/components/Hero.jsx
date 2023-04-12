import { Typewriter } from "react-simple-typewriter";
import heroImg from "../assets/hero.png"
// import { motion } from "framer-motion";
import { Slide } from "react-reveal";

const Hero = () => {
    return ( 
        <>
            <div className="grid sm:grid-cols-2 md:gap-16 md:my-16 my-8">
                <div>
                    <Slide left>
                        <h3 className="uppercase font-medium md:text-lg text-base text-gray-600">
                            We Ideate. Create. Develop. 
                        </h3>
                        <div className="md:my-6 my-4 lg:text-6xl md:text-4xl text-3xl font-bold text-gray-800 md:space-y-3 space-y-1 tracking-wide ">
                            <p>Your complete</p> 
                            <p>
                                tech
                                <span className="underline underline-offset-4 cursor-pointer text-yellow-400 md:mx-2 mx-1">solution</span>
                                in..
                            </p>  
                            <p className="text-cyan-500 md:text-4xl text-xl">
                                <Typewriter
                                    words={[
                                        'Software Development', 
                                        'Graphics Design', 
                                        'CCTV Installation',
                                        'Network Installation',
                                        'Cyber Security',
                                        'Technical Training'
                                    ]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </p>             
                        </div>
                        <p>
                            Manage your bussiness without having to worry about the the software solutions you are using. Less hustle more growth.
                        </p>
                    </Slide>
                </div>

                <div>
                    <Slide right>
                        <img src={heroImg} alt="Hero section" />
                    </Slide>
                </div>
                
            </div>
        </>
     );
}
 
export default Hero;