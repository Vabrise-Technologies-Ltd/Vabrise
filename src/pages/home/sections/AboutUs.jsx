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
                    <div>
                        <div className="mb-4 lg:text-5xl md:text-4xl text-3xl font-bold text-gray-800 md:space-y-3 space-y-1 tracking-wide ">
                            <p>Leading Enterprise </p> 
                            <p>
                                <span className="underline underline-offset-4 cursor-pointer text-cyan-500 md:mx-2 mx-1">tech</span>
                                    provider
                            </p>            
                        </div>
                        <div className="md:text-lg text-base text-gray-700">
                            Vabrise Technologies is a leading ICT Consultancy Company in Kenya 
                            We provide various ICT services such as Web Design, Software Development,
                            Software As A Service, Cloud Computing, Cyber Security, ICT Equipments & Supplies, 
                            ICT Consultancy and Maintainance, and Technical Mentorship
                        </div>
                        <div className="mt-4 ">
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