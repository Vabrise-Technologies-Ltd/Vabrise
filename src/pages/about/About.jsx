import AboutHero from "./sections/AboutHero";
import CompanyFocus from "./sections/CompanyFocus";
import History from "./sections/History";
import OurTeam from "./sections/team/OurTeam";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/faq/FAQ";

const About = () => {
    return ( 
        <>
            <AboutHero />
            <div className="md:px-28 px-4 md:py-16 py-8">
                <History />
                <CompanyFocus />
                <OurTeam />
            </div>
            <Testimonials />
            <div className="md:px-28 px-4 md:py-16 py-8">
                <FAQ />
            </div>
        </>
     );
}
 
export default About;