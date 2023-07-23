import AboutUs from "../components/Home/AboutUs";
import Hero from "../components/Home/Hero";
import OurServices from "../components/Services/OurServices";
import OurWork from "../components/Home/OurWork";

const Home = () => {
    return ( 
        <>
            <div className="lg:px-32 md:px-16 px-6">
                <Hero />
                <OurServices />
                <AboutUs />
                <OurWork />
            </div>
        </>
     );
}
 
export default Home;