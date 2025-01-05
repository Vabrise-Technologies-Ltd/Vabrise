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
            <section className="max-w-7xl mx-auto lg:p-28 md:p-24 py-16 px-3 flex flex-col items-center justify-center"  >
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