import AboutHero from "./sections/AboutHero";
import CompanyFocus from "./sections/CompanyFocus";
// import OurTeam from "./sections/team/OurTeam";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/faq/FAQ";
import WhoWeAre from "./sections/WhoWeAre";
import WorkProcess from "./sections/WorkProcess";

const About = () => {
    return ( 
        <>
            <AboutHero />
            <div className="max-w-7xl mx-auto lg:p-28 md:p-24 py-16 px-3">
                <WhoWeAre />
                <CompanyFocus />
                {/* <OurTeam /> */}
                <WorkProcess />
            </div>
            <Testimonials />
            <div className="max-w-7xl mx-auto md:px-28 px-4 md:py-16 py-8">
                <FAQ />
            </div>
        </>
     );
}
 
export default About;