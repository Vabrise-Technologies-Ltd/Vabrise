import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import Team from "../components/Team";

const Home = () => {
    return ( 
        <>
            <div className="md:px-8 px-6">
                <Hero />
                <AboutUs />
                <OurServices />
                <Team />
                <Contact />
            </div>
        </>
     );
}
 
export default Home;