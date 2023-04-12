import aboutImg from "../assets/about2.webp"
import { Slide } from "react-reveal";


const AboutUs = () => {
    return ( 
        <>
            <section id="about-us" className="md:py-20 py-8">
                <h1 className="section-title">About Us</h1>
                <div className="grid sm:grid-cols-2 md:gap-16 md:my-6 my-4">
                    <div>
                        <Slide left>
                            <img src={aboutImg} alt="Hero section" />
                        </Slide>
                    </div>
                    <div>
                        <Slide right>
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
                            </div>
                            <p>
                                Vabrise Technologies is a startup ICT Consultncy Firm 
                                in Nairobi - Kenya, started in 2020 by passionate tech 
                                students in Baraton University. With vast experience in 
                                what we do, we provide services in Computer Repair & Maintainance, 
                                Software Design & Development, CCTV & Networks Installation & 
                                Maintainance, Graphics Design. We also provide ICT-Based Training 
                                in Web Development, UI/ UX Design, Graphics Design, CCTV & Network 
                                Installation, and Cyber Security.
                            </p>
                        </Slide>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default AboutUs;