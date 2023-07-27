import AboutUs from "../components/Home/AboutUs";
import Hero from "../components/Home/Hero";
import OurWork from "../components/Home/OurWork";
import ServicesList from "../components/Services/ServicesList";

const Home = () => {
    return ( 
        <>
            <Hero />
            <div className="lg:px-32 md:px-16 px-6">
                <AboutUs />
                <ServicesList />
                <OurWork />
            </div>
        </>
     );
}
 
export default Home;