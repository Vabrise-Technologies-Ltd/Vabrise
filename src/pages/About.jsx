import AboutHero from "../components/About/AboutHero";
import CompanyFocus from "../components/About/CompanyFocus";
import History from "../components/About/History";
import OurTeam from "../components/About/Team/OurTeam";
import Testimonials from "../components/About/Testimonials";
import FAQ from "../components/About/FAQ/FAQ";

const About = () => {
    return ( 
        <>
            <AboutHero />
            <div className="md:px-28 px-4 md:py-16 py-8">
                <History />
                <CompanyFocus />
                <OurTeam />
                <Testimonials />
                <FAQ />
            </div>
        </>
     );
}
 
export default About;