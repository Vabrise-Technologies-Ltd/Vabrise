import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import OurWork from "./sections/OurWork";
import Services from "./sections/HomeServices";
import OurPartners from "./sections/OurPartners";
import WhyChooseUs from "./sections/WhyChooseUs";

const Home = () => {
    return ( 
        <>
            <Hero />
            <section className="lg:p-28 md:p-24 py-16 px-3"  >
                <Services />
                <WhyChooseUs />
                <OurWork />
                <AboutUs />
                <OurPartners />
            </section>
            {/* <OurPartners /> */}
        </>
     );
}
 
export default Home;