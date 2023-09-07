import AboutHero from "../components/About/AboutHero";
import CompanyFocus from "../components/About/CompanyFocus";
import History from "../components/About/History";
import Team from "../components/About/Team";
import Testimonials from "../components/About/Testimonials";

const About = () => {
    return ( 
        <>
            <AboutHero />
            <div className="md:px-28 px-4 md:py-16 py-8">
                <History />
                <CompanyFocus />
                <Team />
                <Testimonials />
            </div>
        </>
     );
}
 
export default About;