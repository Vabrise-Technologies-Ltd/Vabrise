import aboutImg from "../../assets/about2.webp"
import { Slide } from "react-reveal";
import { Link } from "react-router-dom";
// import { BsCheckCircleFill } from "react-icons/bs";


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
                            <div className="mb-4 lg:text-5xl md:text-4xl text-2xl font-bold text-gray-800 md:space-y-3 space-y-1 tracking-wide ">
                                <p>Providing nextgen</p> 
                                <p>
                                    <span className="underline underline-offset-4 cursor-pointer text-yellow-400 md:mx-2 mx-1">tech</span>
                                    solutions
                                </p>            
                            </div>
                            <p className="md:text-base text-sm">
                                Vabrise Technologies is a startup ICT Consultancy Firm 
                                in Nairobi - Kenya, started in 2020. We do, we provide services in Computer Sales & Repair, 
                                Software Design & Development, CCTV & Networks Installation & 
                                Maintainance, Graphics Design. We also provide ICT-Based Training 
                                in Web Development, UI/ UX Design, Graphics Design, CCTV & Network 
                                Installation, and Cyber Security.
                            </p>
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