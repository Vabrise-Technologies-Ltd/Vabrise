import aboutImg from "../../../assets/home/about2.webp"
import { Slide } from "react-reveal";
import { Link } from "react-router-dom";

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
                            <div className="mb-4 lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800 md:space-y-3 space-y-1 tracking-wide ">
                                <p>Enterprise tech</p> 
                                <p>
                                    <span className="underline underline-offset-4 cursor-pointer text-cyan-500 md:mx-2 mx-1">solutions</span>
                                    provider
                                </p>            
                            </div>
                            <div className="md:text-lg text-base text-gray-800">
                                Vabrise Technologies is a startup ICT Consultancy Firm 
                                in Nairobi - Kenya, started in 2020. We do, we provide services in Computer Sales & Repair, 
                                Software Design & Development, CCTV & Networks Installation & 
                                Maintainance, Graphics Design. We also provide ICT-Based Training 
                                in Web Development, UI/ UX Design, Graphics Design, CCTV & Network 
                                Installation, and Cyber Security.
                            </div>
                        </Slide>
                        <div className="mt-4 ">
                            <Link to='/about' className="btns">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default AboutUs;