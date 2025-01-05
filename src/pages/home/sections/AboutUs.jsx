import aboutImg from "../../../assets/home/about2.webp"
import { Link } from "react-router-dom";

const AboutUs = () => {
    return ( 
        <>
            <section id="about-us" className="md:py-20 py-8">
                <h1 className="section-title">About Us</h1>
                <div className="grid sm:grid-cols-2 md:gap-16 md:my-6 my-4">
                    <div>
                        <img src={aboutImg} alt="Hero section" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="mb-4 lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800 md:space-y-3 space-y-1 tracking-wide ">
                            <p>Innovative Enterprise </p> 
                            <p>
                                <span className="underline underline-offset-4 cursor-pointer text-cyan-500 md:mx-2 mx-1">tech</span>
                                    provider
                            </p>            
                        </div>
                        <div className="md:text-lg text-base text-gray-700">
                        Vabrise Technologies is a leading ICT consultancy company in Kenya, 
                        offering a wide range of services including Web Design, Software Development, 
                        Cloud Computing, Cyber Security, and Technical Mentorship. We are committed 
                        to helping businesses harness the power of technology to achieve their goals.
                        </div>
                        <div className="md:mt-6 mt-4 ">
                            <Link to='/about' className="btns">
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default AboutUs;