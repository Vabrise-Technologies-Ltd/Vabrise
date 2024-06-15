import AboutHero from "./sections/AboutHero";
import CompanyFocus from "./sections/CompanyFocus";
import OurTeam from "./sections/team/OurTeam";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/faq/FAQ";
import WhoWeAre from "./sections/WhoWeAre";

const About = () => {
    return ( 
        <>
            <AboutHero />
            <div className="md:px-28 px-4 md:py-16 py-8">
                <WhoWeAre />
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