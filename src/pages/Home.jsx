import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import OurWork from "../components/OurWork";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return ( 
        <>
            <div className="lg:px-32 md:px-16 px-6">
                <Hero />
                <OurServices />
                <AboutUs />
                <OurWork />
                <Testimonials />
                <Team />
                <Contact />
            </div>
        </>
     );
}
 
export default Home;